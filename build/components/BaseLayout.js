import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from './Navbar';
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { Grid2 } from '@mui/material';
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';
export default function BaseLayout() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
  const refHome = useScrollObserver(setActive);
  const refAbout = useScrollObserver(setActive);
  const refPortfolio = useScrollObserver(setActive);
  let [darkMode, setDarkMode] = useState(false);
  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }
  useEffect(() => {
    let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);
  return /*#__PURE__*/React.createElement(Box, {
    className: darkMode ? Style.dark : Style.light
  }, /*#__PURE__*/React.createElement(Grid2, {
    container: true,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between'
  }, /*#__PURE__*/React.createElement(Grid2, {
    item: ""
  }, /*#__PURE__*/React.createElement(Navbar, {
    darkMode: darkMode,
    handleClick: handleToggleDarkMode,
    active: active,
    setActive: setActive
  })), /*#__PURE__*/React.createElement(Grid2, {
    item: "",
    flexGrow: 1
  }, singlePage ? /*#__PURE__*/React.createElement(SinglePageRoutes, {
    refs: {
      refHome,
      refAbout,
      refPortfolio
    }
  }) : /*#__PURE__*/React.createElement(MultiPageRoutes, null)), /*#__PURE__*/React.createElement(Grid2, {
    item: ""
  })));
}