import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
export default function About({
  innerRef
}) {
  const firstName = info.firstName.toLowerCase();
  function aboutMeText() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: info.baseColor
      }
    }, firstName, info.lastName.toLowerCase(), " $"), " cat about", firstName, " "), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: info.baseColor
      }
    }, "about", firstName, " ", /*#__PURE__*/React.createElement("span", {
      className: Style.green
    }, "(main)"), " $ "), info.bio));
  }
  function skillsText() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: info.baseColor
      }
    }, firstName, info.lastName.toLowerCase(), " $"), " cd skills/tools"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: info.baseColor
      }
    }, "skills/tools ", /*#__PURE__*/React.createElement("span", {
      className: Style.green
    }, "(main)"), " $"), " ls"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: info.baseColor
      }
    }, " Proficient With"), /*#__PURE__*/React.createElement("ul", {
      className: Style.skills
    }, info.skills.proficientWith.map((proficiency, index) => /*#__PURE__*/React.createElement("li", {
      key: index
    }, proficiency))), /*#__PURE__*/React.createElement("p", {
      style: {
        color: info.baseColor
      }
    }, " Exposed To"), /*#__PURE__*/React.createElement("ul", {
      className: Style.skills
    }, info.skills.exposedTo.map((skill, index) => /*#__PURE__*/React.createElement("li", {
      key: index
    }, skill))));
  }
  function miscText() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: info.baseColor
      }
    }, firstName, info.lastName.toLowerCase(), " $"), " cd hobbies/interests"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: info.baseColor
      }
    }, "hobbies/interests ", /*#__PURE__*/React.createElement("span", {
      className: Style.green
    }, "(main)"), " $"), " ls"), /*#__PURE__*/React.createElement("ul", null, info.hobbies.map((hobby, index) => /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement(Box, {
      component: 'span',
      mr: '1rem'
    }, hobby.emoji), hobby.label))));
  }
  return /*#__PURE__*/React.createElement(Box, {
    ref: innerRef,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: '3rem',
    id: 'about'
  }, /*#__PURE__*/React.createElement(Terminal, {
    text: aboutMeText()
  }), /*#__PURE__*/React.createElement(Terminal, {
    text: skillsText()
  }), /*#__PURE__*/React.createElement(Terminal, {
    text: miscText()
  }));
}