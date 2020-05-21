require("dotenv").config();
const admin = require("firebase-admin");
const express = require("express");
const { Client } = require("pg");

const app = express();
const port = process.env.PORT;

admin.initializeApp({
  credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const pgClient = new Client({
  connectionString: process.env.PG_CONNECTION_STRING,
});

app.use(express.json());

app.post("/enhance-token", (req, res, next) => {
  if (!(req.body && req.body.idToken)) {
    return res.status(400).json({
      status: "error",
      message: "Bad Request",
    });
  }
  const idToken = req.body.idToken;
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      const uid = decodedToken.uid;
      const queryText = `
                WITH new_user as (
                    INSERT INTO users (id, firebase_uid) VALUES (DEFAULT, $1)
                    ON CONFLICT (firebase_uid) DO NOTHING
                    RETURNING id
                    )
                SELECT
                    COALESCE(
                        (SELECT id from new_user),
                        (SELECT id FROM users WHERE firebase_uid=$1)
                    )
            `;
      const queryValues = [uid];
      pgClient
        .query(queryText, queryValues)
        .then((pgRes) => {
          const databaseUserID = pgRes.rows[0].coalesce;
          const customClaims = {
            "https://hasura.io/jwt/claims": {
              "x-hasura-default-role": "user",
              "x-hasura-allowed-roles": ["user"],
              "x-hasura-user-id": databaseUserID,
            },
          };
          admin
            .auth()
            .setCustomUserClaims(decodedToken.uid, customClaims)
            .then(() => {
              const metadataRef = admin
                .database()
                .ref("metadata/" + decodedToken.uid);
              metadataRef.set({ refreshTime: new Date().getTime() });
              return res.json({
                status: "success",
              });
            })
            .catch((err) => {
              console.error("issue while setting custom claims", err.stack);
              return next(err);
            });
        })
        .catch((err) => {
          console.error("database query error", err.stack);
          return next(err);
        });
    })
    .catch((err) => {
      console.error("token verification error", err.stack);
      return next(err);
    });
});

pgClient
  .connect()
  .then(() => {
    console.log("connected to database");
    app.listen(port, () =>
      console.log(`listening on port ${port}`)
    );
  })
  .catch((err) => console.error("database connection error", err.stack));
