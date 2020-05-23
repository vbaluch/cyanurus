import React from "react";
import { Router } from "@reach/router";
import { Layout } from "../components/Layout";
import { Login } from "../components/Login";
import { PrivateRoute } from "../components/PrivateRoute";
import Profile from "../components/Profile";
import { EmailSuccess } from "../components/EmailSuccess";

const AppPage = () => (
  <Layout>
    <div className="w-full">
      <section className="bg-white border-b py-8">
        <div className="container mx-auto h-screen flex flex-wrap pt-4 pb-6 text-black">
          <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/app/login" />
            <EmailSuccess path="/app/email-success" />
          </Router>
        </div>
      </section>
    </div>
  </Layout>
);
export default AppPage;
