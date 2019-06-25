import React from "react";

const FooterItem = props => {
  const { file, href, text } = props.item;

  return (
    <li>
      <img src={`./images/${file}`} className="footer-img" alt="" />
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
};

export default FooterItem;
