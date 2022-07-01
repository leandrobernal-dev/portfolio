import React from "react";

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="about-column">
        <div className="about-header">
          <div className="green-line"></div>
          <div className="box-design">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="about-content">
          <h3>
            Hi, Nice to meet you. I am a freelance frontend web developer and
            designer
          </h3>
          <br />
          <h3>
            Apart from being a developer, I enjoy most of my time doing
            robotics, that's how I got really interested in programming and
            eventually learn it. I also recently started doing more web design.
          </h3>
        </div>

        <div className="my-skills-column">
          <div className="skills-header">
            <div className="green-line"></div>
            <div className="box-design">
              <h2>My Skills</h2>
            </div>
          </div>

          <div className="skills">
            <div>
              <i className="devicons devicons-html5" />
              <h5>Html5</h5>
            </div>
            <div>
              <i className="devicons devicons-css3" />
              <h5>Css3</h5>
            </div>
            <div>
              <i className="devicons devicons-sass" />
              <h5>Sass</h5>
            </div>
            <div>
              <i className="devicons devicons-javascript" />
              <h5>JS</h5>
            </div>
            <div>
              <i className="devicons devicons-jquery" />
              <h5>Jquery</h5>
            </div>

            <div>
              <i className="devicons devicons-react" />
              <h5>ReactJs</h5>
            </div>
            {/* <div>
              <i className="devicons devicons-wordpress" />
              <h5>Wrordpress</h5>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
