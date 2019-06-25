import React from "react";

export default props => {
  const { person } = props;
  const name = person.replace(/-/g, " ");

  return (
    <li className="person">
      <img src={`./images/people/${person}.jpg`} alt={`${person}`} />
      <span className="person-name">{name}</span>
    </li>
  );
};
