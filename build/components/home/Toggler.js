import React from 'react';
import { Box } from "@mui/material";
export default function Toggler({
  darkMode,
  handleClick
}) {
  const transition = 'all 250ms ease';
  return /*#__PURE__*/React.createElement(Box, {
    fontSize: '1.5rem',
    sx: {
      cursor: 'pointer',
      ":hover": {
        transform: 'translateY(-3px)',
        transition: transition
      }
    }
  }, darkMode ? /*#__PURE__*/React.createElement("span", {
    onClick: handleClick,
    "aria-label": "Full Moon",
    role: "img"
  }, "\uD83C\uDF15") : /*#__PURE__*/React.createElement("span", {
    onClick: handleClick,
    "aria-label": "New Moon",
    role: "img"
  }, "\uD83C\uDF11"));
}