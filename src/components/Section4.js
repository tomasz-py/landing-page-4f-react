import React from "react";

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
          <li className="person">
            <img src="./images/people/kubot.jpg" alt="Kubot" />
            <span className="person-name test">Łukasz Kubot</span>
          </li>
          <li className="person">
            <img src="./images/people/antiga.jpg" alt="Antiga" />
            <span className="person-name">Stéphane Antiga</span>
          </li>
          <li className="person">
            <img src="./images/people/kot.jpg" alt="Kot" />
            <span className="person-name">Maciej Kot</span>
          </li>
          <li className="person">
            <img src="./images/people/Zvejnieks.jpg" alt="Zvejnieks" />
            <span className="person-name">Miks Zvejnieks</span>
          </li>
          <li className="person">
            <img src="./images/people/Sorm.jpg" alt="Sorm" />
            <span className="person-name">Patrik Šorm</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
