import React from "react";
import { Router } from "@reach/router";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";
import { PrivateRoute } from "../components/PrivateRoute";
import Profile from "../components/Profile";

const AppPage = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
);
export default AppPage;
