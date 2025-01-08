import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
function PortfolioBlock(props) {
  const {
    image,
    live,
    source,
    title
  } = props;
  return /*#__PURE__*/React.createElement(Box, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }, /*#__PURE__*/React.createElement(Box, {
    component: 'img',
    src: image,
    alt: 'mockup'
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '2rem'
    }
  }, title), /*#__PURE__*/React.createElement(Box, {
    className: 'portfolio',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    alignItems: 'center',
    fontSize: '1.5rem',
    py: '2rem'
  }, /*#__PURE__*/React.createElement(Box, {
    p: 1,
    border: '2px solid black',
    borderRadius: '25px'
  }, /*#__PURE__*/React.createElement(IconLink, {
    link: live,
    title: 'Live Demo',
    icon: 'fa fa-safari'
  })), /*#__PURE__*/React.createElement(Box, {
    p: 1,
    border: '2px solid black',
    borderRadius: '25px'
  }, /*#__PURE__*/React.createElement(IconLink, {
    link: source,
    title: 'Source Code',
    icon: 'fa fa-code'
  }))));
}
export default PortfolioBlock;