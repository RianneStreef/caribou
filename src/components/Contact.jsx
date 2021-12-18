import React from "react";

import "../styles/Contact.css";
import { content } from "../content/languages";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);
  return (
    <div className="contact" id="contact">
      <section className="contact-page">
        <div className="contact-text ">
          <p>
            <span> {languageToUse.contact2}</span>
            <a href="tel:0033603456223" className="tel-number">
              {languageToUse.contact3}
            </a>
            <span>{languageToUse.contact4}</span>
          </p>
        </div>
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          action="/success"
          netlify-honeypot="bot-field"
        >
          <input
            className="contact-input"
            type="hidden"
            name="contact"
            value="contact"
          />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <p className="form-items">
            <label htmlFor="name">{languageToUse.name}</label> <br />
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="email">{languageToUse.email} </label>
            <br />
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="message">{languageToUse.message}</label> <br />
            <textarea
              className="contact-input"
              id="message"
              name="message"
              required
              rows="10"
            ></textarea>
          </p>
          <div className="button-container">
            <button className="button" type="submit" value="Submit message">
              {languageToUse.send}
            </button>
          </div>
        </form>
      </section>{" "}
    </div>
  );
};

export default Contact;
