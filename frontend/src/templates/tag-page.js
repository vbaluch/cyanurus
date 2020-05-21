import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";
import { CourseProvider } from "../components/CourseProvider";

export default function TagPage({ data }) {
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
      <SEO
        keywords={[`free`, `courses`, `learn`, data.cyanurus.tags[0].name]}
        title={`${data.cyanurus.tags[0].name}`}
      />

      <div className="w-full">
        <section className="bg-white border-b py-8">
          <div className="container mx-auto flex flex-wrap pt-4 pb-6">
            <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
              {`${data.cyanurus.tags[0].name}`}
            </h3>
          </div>
        </section>
        {CourseProviders}
      </div>
    </Layout>
  );
}
TagPage.propTypes = {
  data: PropTypes.shape({
    cyanurus: PropTypes.shape({
      course_providers: PropTypes.array,
      tags: PropTypes.array,
    }),
  }),
};

export const query = graphql`
  query($tagID: cyanurus_uuid!) {
    cyanurus {
      course_providers(
        order_by: { score: desc }
        where: { courses: { course_tags: { tag: { id: { _eq: $tagID } } } } }
      ) {
        id
        name
        description
        link
        courses(where: { course_tags: { tag_id: { _eq: $tagID } } }) {
          id
          ...CourseData
        }
      }
      tags(where: { id: { _eq: $tagID } }) {
        id
        name
        slug
      }
    }
  }
`;
