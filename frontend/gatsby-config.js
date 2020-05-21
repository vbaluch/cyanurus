require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: "Free Courses List",
    description: "List of free courses during the COVID-19 situation",
    author: "Free Courses List Team",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")("./tailwind.config.js"),
          ...(process.env.NODE_ENV === "production"
            ? [require("autoprefixer"), require("cssnano")]
            : []),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "cyanurus",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "cyanurus",
        // Url to query from
        url: process.env.GRAPHQL_URL,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        },
      },
    },
  ],
};
