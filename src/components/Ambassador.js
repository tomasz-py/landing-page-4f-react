import React from "react";

export default props => {
  const { person } = props;
  //delete "-" from file name and .jpg/.png
  let name = person.replace(/-/g, " ");
  name = name.substring(0, name.indexOf("."));

  return (
    <li className="person">
      <img src={`./images/people/${person}`} alt={`${person}`} />
      <span className="person-name">{name}</span>
    </li>
  );
};
