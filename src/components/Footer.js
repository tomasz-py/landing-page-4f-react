import React from "react";
import FooterItem from "./FooterItem";

const Footer = () => {
  //array to add footer item, each element = file from public/images folder (name-surrname)
  const footerItems = [
    {
      file: "Insta.png",
      href: "http://instagram.com/4f_team/",
      text: "instagram.com/4f_team/"
    },
    {
      file: "Fb.png",
      href: "http://facebook.com/4F",
      text: "facebook.com/4F"
    }
  ];

  return (
    <footer className="footer">
      <div className="content-wrapper">
        <ul className="footer-ul">
          {footerItems.map((item, index) => {
            return <FooterItem item={item} key={index} />;
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
