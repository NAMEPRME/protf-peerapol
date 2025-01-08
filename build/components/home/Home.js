import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import me from '../../img/self1.jpg';
export default function Home({
  innerRef
}) {
  return /*#__PURE__*/React.createElement(Box, {
    ref: innerRef,
    component: 'main',
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row'
    },
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 175px)',
    id: 'home'
  }, /*#__PURE__*/React.createElement(Box, {
    className: classNames(Style.avatar, Style.shadowed),
    alt: 'image of developer',
    style: {
      background: info.gradient
    },
    component: 'img',
    src: me,
    width: {
      xs: '35vh',
      md: '40vh'
    },
    height: {
      xs: '35vh',
      md: '40vh'
    },
    borderRadius: '50%',
    p: '0.75rem',
    mb: {
      xs: '1rem',
      sm: 0
    },
    mr: {
      xs: 0,
      md: '2rem'
    }
  }), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement("h1", null, "Hi, I'm ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: info.gradient,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, info.firstName), /*#__PURE__*/React.createElement("span", {
    className: Style.hand
  }, "\uD83E\uDD1A")), /*#__PURE__*/React.createElement("h2", null, "I'm ", info.position, "."), /*#__PURE__*/React.createElement(Box, {
    component: 'ul',
    p: '0.8rem'
  }, info.miniBio.map((bio, index) => /*#__PURE__*/React.createElement(EmojiBullet, {
    key: index,
    emoji: bio.emoji,
    text: bio.text
  }))), /*#__PURE__*/React.createElement(Box, {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    fontSize: {
      xs: '2rem',
      md: '2.5rem'
    }
  }, info.socials.map((social, index) => /*#__PURE__*/React.createElement(SocialIcon, {
    key: index,
    link: social.link,
    icon: social.icon,
    label: social.label
  })))));
}