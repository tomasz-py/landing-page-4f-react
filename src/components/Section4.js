import React from "react";
import Ambassador from "./Ambassador";

//array to add ambassadors, each element = file name from public/images folder (name-surrname)
const people = [
  "Łukasz-Kubot",
  "Stéphane-Antiga",
  "Maciej-Kot",
  "Miks-Zvejnieks",
  "Patrik-Šorm"
];

export default () => {
  return (
    <section id="section-4">
      <div className="content-wrapper">
        <h2>Ambassadors</h2>
        <p>
          Furthermore, 4F constantly collaborates with individually selected
          professional athletes, gaining from their personal insights and
          experience. The group of brand ambassadors, testing and training in
          our apparel, includes such athletes as Polish tennis player Łukasz
          Kubot, Czech sprinter specialising in the 400 metres Patrik Šorm and
          Latvian alpine skier Miks Zvejnieks.
        </p>
        <ul className="people">
          {people.map((person, index) => {
            return <Ambassador person={person} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};
