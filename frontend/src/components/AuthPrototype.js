import React from "react";
import { Link } from "gatsby";
import { getUser, isLoggedIn, logout } from "../services/auth";

export function AuthPrototype() {
  return (
    <div>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
            <button onClick={() => logout()}>Log out</button>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </div>
  );
}
