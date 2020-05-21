import React from "react";

import { Link } from "gatsby";

export function CallToAction() {
  return (
    <section className="container mx-auto text-center py-6">
      <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-white">
        This list is crowdsourced
      </h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <button className="my-4 mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
        Add more data
      </button>
      <p className="text-xs">
        <Link className="underline" to="/about">
          About
        </Link>
      </p>
    </section>
  );
}
