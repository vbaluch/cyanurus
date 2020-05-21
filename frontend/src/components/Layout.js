import PropTypes from "prop-types";
import React from "react";

import { Header } from "./Header";
import { Hero } from "./Hero";
import { WavesTop } from "./WavesTop";
import { WavesBottom } from "./WavesBottom";

export function Layout({ children }) {
  return (
    <div className="leading-normal tracking-normal text-white gradient">
      <Header />
      <Hero />
      <WavesTop />
      {children}
      <WavesBottom />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
