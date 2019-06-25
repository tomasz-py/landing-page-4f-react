import React from "react";
import * as fs from "fs";

import listReactFiles from "list-react-files";

console.log(fs);
// const test = listReactFiles(__dirname).then(files => console.log(files));

const Header = params => {
  return (
    <header className="header">
      <div className="content-wrapper">
        <a href="#" className="logo">
          <img src="./images/4f.png" alt="4F" />
        </a>
      </div>
    </header>
  );
};

export default Header;
