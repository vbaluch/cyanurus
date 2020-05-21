import React from "react";

export function Hero() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            Free courses during the COVID-19 situation
          </p>
          <h1 className="my-4 text-4xl font-bold leading-tight">
            Thousands of Free Resources for Learning Something New
          </h1>
        </div>
      </div>
    </div>
  );
}
