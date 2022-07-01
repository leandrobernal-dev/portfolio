import React, { useRef } from "react";
import $, { post } from "jquery";

export default function Header() {
  // state for showing mobile menu
  const [showMenu, setShowMenu] = React.useState(false);
  const [scroll, setScroll] = React.useState(window.scrollY);

  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-link");
    sections.forEach((section) => {
      const pos = section.getBoundingClientRect().y;
      const offset = section.offsetHeight / 2;

      if (window.scrollY < 533) {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        $(".home")[0].classList.add("active");
      } else if (pos < offset) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") == "#" + section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, [scroll]);

  function scrollToElement(e) {
    e.preventDefault();
    const ePos = $(e.target.getAttribute("href"))[0].offsetTop;
    window.scrollTo({
      top: ePos - 65,
      behavior: "smooth",
    });
  }

  window.onscroll = () => {
    // change the opacity of the homepage based on the scrollpositiony
    if (window.scrollY < 400) {
      $("#home")[0].style.opacity = (1000 - window.scrollY) / 1000;
      const scale = (1000 - window.scrollY) / 10;
      $(".home-column")[0].style.width = `${scale - 10}%`;
    }

    setScroll(window.scrollY);
    // hide menu (if active) when scrolling
    if (showMenu) {
      toggleMenu();
    }
  };

  // Toggle menu onclick
  function toggleMenu() {
    const menu = $("menu");
    // toggle menu onClick
    menu.toggleClass("showmenu");
    // set the variable to true if value is false and vice versa
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className="header-section">
        <h3 className="logo">bernalleandro-dev.com</h3>
        <nav className="nav">
          <menu onClick={toggleMenu}>
            {/* change the header navlinks if your on the page --- this is a workaround */}

            <ul>
              <li>
                <a
                  onClick={scrollToElement}
                  href="#root"
                  className="home nav-link"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={scrollToElement}
                  href="#projects"
                  className="nav-link"
                >
                  My_projects
                </a>
              </li>
              <li>
                <a onClick={scrollToElement} href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={scrollToElement}
                  href="#contact"
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="accounts">
              <a
                href="https://github.com/leandrobernal-dev"
                target="_blank"
                className="ri-github-fill github-icon"
              />
            </div>
          </menu>

          <i
            onClick={toggleMenu}
            className={
              showMenu
                ? "ri-close-line close-menu-btn menu-btn"
                : "ri-menu-3-line open-menu-btn menu-btn"
            }
          />
        </nav>
      </div>
    </header>
  );
}
