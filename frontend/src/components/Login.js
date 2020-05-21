import React from "react";
import { navigate } from "@reach/router";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { handleAuthSuccessResult, isLoggedIn } from "../services/auth";
import firebase from "gatsby-plugin-firebase";

export const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/profile`);
  }

  function getUiConfig(auth) {
    return {
      signInFlow: "popup",
      signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          handleAuthSuccessResult(result);
          navigate("/app/profile");
        },
      },
    };
  }

  return (
    <>
      <p>Please sign-in to access to the private route:</p>
      {firebase && (
        <StyledFirebaseAuth
          uiConfig={getUiConfig(firebase.auth)}
          firebaseAuth={firebase.auth()}
        />
      )}
    </>
  );
};
