import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { FeatureToggles, Feature } from "@paralleldrive/react-feature-toggles";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { CourseProvider } from "../components/CourseProvider";
import { AuthPrototype } from "../components/AuthPrototype";
import { SubmissionForm } from "../components/SubmissionForm";

const features = [];
// const features = ["authPrototype"];

export default function IndexPage({ data }) {
  const CourseProviders = data.cyanurus.course_providers.map(
    (courseProvider) => (
      <CourseProvider
        key={courseProvider.id}
        courseProviderData={courseProvider}
      />
    )
  );
  return (
    <Layout>
      <SEO keywords={[`free`, `courses`, `list`]} title="Home" />
      {/* TODO move higher up into non-page component */}
      <FeatureToggles features={features}>
        <Feature
          name="authPrototype"
          inactiveComponent={() => null}
          activeComponent={AuthPrototype}
        />
      </FeatureToggles>
      <div className="flex flex-col md:flex-row bg-white">
        <div className="md:w-8/12 px-4 mx-2">{CourseProviders}</div>
        <div className="md:w-4/12 h-full px-2 mx-2 pt-4">
          <SubmissionForm />
        </div>
      </div>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    cyanurus: PropTypes.shape({
      course_providers: PropTypes.array,
    }),
  }),
};

export const query = graphql`
  query {
    cyanurus {
      course_providers(order_by: { score: desc }) {
        id
        ...CourseProviderData
      }
    }
  }
`;
