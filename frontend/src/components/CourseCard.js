import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export function CourseCard({ courseData }) {
  return (
    <div className="max-w-sm p-6 flex flex-col flex-grow flex-shrink h-64">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow hover:shadow-outline">
        <p className="w-full text-gray-600 text-xs md:text-sm px-6 mb-2 mt-2">
          {courseData.course_tags.map((courseTag) => (
            <span
              className="inline-flex rounded-full bg-gray-200 px-2 text-s mr-2"
              key={courseTag.id}
            >
              <Link to={"/tags/" + courseTag.tag.slug}>
                {courseTag.tag.name}
              </Link>
            </span>
          ))}
        </p>
        <div className="w-full font-bold text-xl text-gray-800 px-6 hover:text-blue-500">
          <OutboundLink href={courseData.link}>{courseData.title}</OutboundLink>
        </div>
        <p className="courseCardDescription text-gray-800 text-base px-6 pb-6 mb-6">
          {courseData.description}
        </p>
      </div>
    </div>
  );
}
CourseCard.propTypes = {
  courseData: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    course_provider: PropTypes.shape({
      name: PropTypes.string,
    }),
    course_tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        tag: {
          name: PropTypes.string,
          slug: PropTypes.string,
        },
      })
    ),
  }),
};

export const query = graphql`
  fragment CourseData on cyanurus_courses {
    title
    link
    description
    course_tags {
      id
      tag {
        name
        slug
      }
    }
    course_provider {
      name
    }
  }
`;
