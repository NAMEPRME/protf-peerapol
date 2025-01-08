import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Box } from "@mui/material";
export default function SinglePageRoutes({
  refs
}) {
  return /*#__PURE__*/React.createElement(Box, {
    mt: '3rem'
  }, /*#__PURE__*/React.createElement(Home, {
    innerRef: refs.refHome
  }), /*#__PURE__*/React.createElement(About, {
    innerRef: refs.refAbout
  }), /*#__PURE__*/React.createElement(Portfolio, {
    innerRef: refs.refPortfolio
  }));
}