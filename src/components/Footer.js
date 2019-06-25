import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <ul className="footer-ul">
          <li>
            <img src="./images/Insta.png" className="insta" alt="" />
            <a
              href="http://instagram.com/4f_team/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/4f_team/
            </a>
          </li>
          <li>
            <img src="./images/Fb.png" className="insta" alt="" />
            <a
              href="http://facebook.com/4F"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/4F
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
