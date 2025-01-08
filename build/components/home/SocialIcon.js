import React from 'react';
function SocialIcon(props) {
  const {
    link,
    icon,
    label
  } = props;
  return /*#__PURE__*/React.createElement("a", {
    target: "_blank",
    "aria-label": label,
    rel: "noopener noreferrer",
    href: link
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
export default SocialIcon;