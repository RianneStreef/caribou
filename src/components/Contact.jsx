import React from "react";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <section className="contact-page">
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          action="/success"
        >
          <input
            className="contact-input"
            type="hidden"
            name="contact"
            value="contact"
          />
          <p className="form-items">
            <label htmlFor="name">Name:</label> <br />
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="email">Email:</label> <br />
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="message">Message:</label> <br />
            <textarea
              className="contact-input"
              id="message"
              name="message"
              required
              rows="10"
            ></textarea>
          </p>
          <div className="contact-button-container">
            <button className="button" type="submit" value="Submit message">
              Send{" "}
            </button>
          </div>
        </form>
        <div className="contact-text ">
          <h2>Contact</h2>

          <p>WE DONT TAKE RESERVATIONS VIA INTERNET</p>
          <p>
            Vous pouvez nous joindre pour les réservations et renseignements,
            par téléphone au 06 03 45 62 23.
          </p>
        </div>
      </section>{" "}
    </div>
  );
};

export default Contact;
