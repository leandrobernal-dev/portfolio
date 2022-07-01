import React from "react";
import "./header.scss";
import "./home.scss";
import "./index.scss";
import "./recent-project.scss";
import "./about.scss";
import "./contact-form.scss";

import Header from "./components/Header";
import Home from "./components/Home";
import RecentProjects from "./components/RecentProjects";
import About from "./components/About";
import ContactForm from "./components/Contact-form";
// import ContactForm from "./components/Contact-form";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <RecentProjects />
      <About />
      <ContactForm />
    </>
  );
}
