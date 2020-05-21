require("dotenv").config();
export const enhanceToken = (idToken) => {
  fetch(`${process.env.CYANURUS_API_URL}/enhance-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      idToken: idToken,
    }),
  })
    .then((res) => {
      if (JSON.parse(res).status === "success") {
        return;
      } else console.error("enhance-token server-side error");
    })
    .catch((err) => console.error("enhance-token request error", err));
};
