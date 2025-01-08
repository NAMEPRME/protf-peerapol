import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from '../info/Info';
const links = [{
  name: 'Home',
  to: '',
  active: 'home'
}, {
  name: 'About',
  to: 'about',
  active: 'about'
}, {
  name: info.initials,
  type: 'initials',
  to: '',
  active: 'home'
}, {
  name: 'Portfolio',
  to: 'portfolio',
  active: 'portfolio'
}];

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = el => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({
    top: yCoordinate + yOffset,
    behavior: 'smooth'
  });
};
export default function Navbar({
  darkMode,
  handleClick,
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement(Box, {
    component: 'nav',
    width: '100%',
    position: singlePage ? 'fixed' : 'relative',
    className: darkMode ? Style.dark : Style.light
  }, /*#__PURE__*/React.createElement(Box, {
    component: 'ul',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: {
      xs: '2rem',
      md: '8rem'
    },
    textTransform: 'lowercase',
    fontSize: '1rem'
  }, links.map((link, index) => /*#__PURE__*/React.createElement(Box, {
    key: index,
    component: 'li',
    className: link.active === active && !link.type && Style.active,
    sx: {
      borderImageSource: info.gradient
    }
  }, /*#__PURE__*/React.createElement(Link, {
    to: singlePage ? `#${link.to}` : `/${link.to}`,
    scroll: el => scrollWidthOffset(el),
    smooth: true,
    onClick: () => setActive(link.active),
    className: Style.link
  }, !link.type && /*#__PURE__*/React.createElement("p", {
    style: {
      padding: '0.5rem 0'
    }
  }, link.name), link.type && /*#__PURE__*/React.createElement("h1", null, link.name)))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Toggler, {
    darkMode: darkMode,
    handleClick: handleClick
  }))));
}