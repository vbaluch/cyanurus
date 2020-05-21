import { Link } from "gatsby";
import React from "react";

export function Header() {
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white bg-white shadow"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"
            to="/"
          >
            📚 Free Courses List
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}
