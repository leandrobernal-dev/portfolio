import React from "react";
import laptop from "../assets/images/laptop.svg";
import circle from "../assets/images/circle-design.svg";

export default function Home() {
  return (
    <section id="home" className="home-page">
      <img className="circle a" src={circle} />
      <img className="circle b" src={circle} />
      <div className="home-column">
        <div className="blinking-led"></div>
        <img src={laptop} />
        <div className="content-container">
          <h4>Hi👋, I am</h4>
          <h1>Leandro Bernal</h1>
          <h3>Frontend developer / Web designer</h3>
          <h4>
            I love turning Ideas into reality, from beautiful design to
            responsive website
          </h4>

          <div className="background-style b"></div>
          <div className="background-style a"></div>
        </div>
      </div>
    </section>
  );
}
