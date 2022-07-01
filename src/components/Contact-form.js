import React from "react";
import emailjs from "emailjs-com";
import $, { post } from "jquery";
import background from "../assets/images/noise.svg";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4ljvse",
        "template_s4oy9gq",
        e.target,
        "btKyg8K3sRx1TB2ND"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-column">
        <div className="contact-header">
          <div className="green-line"></div>
          <div className="box-design">
            <h2>Contact Me</h2>
          </div>
        </div>

        <form onSubmit={sendEmail}>
          <input name="name" type="name" placeholder="Your name"></input>
          <input
            name="email"
            className="email"
            type="email"
            placeholder="Email"
          ></input>
          <textarea
            name="message"
            className="message"
            type="text"
            placeholder="Your Message"
          ></textarea>
          <div className="button">
            <div className="green-line"></div>
            <button>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
