import React from "react";

export default props => {
  const { person } = props;
  //delete "-" and .jpg/.png from file name
  let name = person.replace(/-/g, " ");
  name = name.substring(0, name.indexOf("."));

  return (
    <li className="person">
      <img src={`./images/people/${person}`} alt={`${person}`} />
      <span className="person-name">{name}</span>
    </li>
  );
};
