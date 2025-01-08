import React from 'react';
function IconLink(props) {
  const {
    link,
    title,
    icon
  } = props;
  return /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  }), " ", title);
}
export default IconLink;