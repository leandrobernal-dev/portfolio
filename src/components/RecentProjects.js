import React from "react";
import portfolio from "../assets/images/projects-preview/portfolio.svg";

export default function RecentProjects() {
  return (
    <section id="projects" className="recent-projects section">
      <div className="recent-projects-column">
        <div className="recent-projects-header">
          <h2>My Recent Projects</h2>
          <h3>Here are some my recent projects</h3>
          <div className="box-design"></div>
        </div>

        <div className="projects-container">
          <div className="portfolio projects">
            <h4>Portfolio</h4>
            <img src={portfolio} />
            <div className="links">
              <a
                href="https://github.com/leandrobernal-dev"
                target="_blank"
                className="ri-github-fill github-icon"
              />
            </div>
          </div>

          <div className="box-design a"></div>
          <div className="box-design b"></div>
        </div>
      </div>
    </section>
  );
}
