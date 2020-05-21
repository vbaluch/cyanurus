import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { CourseCard } from "./CourseCard";

export function CourseProvider({ courseProviderData }) {
  const CourseCards = courseProviderData.courses.map((course) => (
    <CourseCard key={course.id} courseData={course} />
  ));
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-6">
        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          {courseProviderData.name}
        </h3>
        {courseProviderData.description ? (
          <div className="w-full mb-4 text-center text-gray-800">
            <p>{courseProviderData.description}</p>
          </div>
        ) : null}
        {courseProviderData.link ? (
          <h4 className="w-full mb-2 text-m font-bold leading-tight text-center text-blue-500">
            <a href={courseProviderData.link}>More information</a>
          </h4>
        ) : null}
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        {CourseCards}
      </div>
    </section>
  );
}
CourseProvider.propTypes = {
  courseProviderData: PropTypes.shape({
    description: PropTypes.string,
    name: PropTypes.name,
    link: PropTypes.string,
    courses: PropTypes.array,
  }),
};

export const query = graphql`
  fragment CourseProviderData on cyanurus_course_providers {
    name
    description
    courses(order_by: { score: desc }) {
      id
      ...CourseData
    }
    link
  }
`;
