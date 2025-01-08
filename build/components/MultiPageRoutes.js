import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
export default function MultiPageRoutes() {
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: '/',
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: '/about',
    element: /*#__PURE__*/React.createElement(About, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: '/portfolio',
    element: /*#__PURE__*/React.createElement(Portfolio, null)
  }));
}