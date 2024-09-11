import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../../utils/baseUrl";
import Image from "next/image";
import IconContact from "../../../public/images/personal-portfolio/icon-contact.png";

//import contactImg from "../../../public/images/personal-portfolio/contact.jpg";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="contact-section" className="pp-contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center contact-section">
            <div className="col-lg-6">
              <div className="contact-form">
                <div className="contact-title">
                  <Image src={IconContact} alt="icon contact" />
                  <h2>Travaillons ensemble !</h2>
                  <p>
                    Mon numéro de téléphone{" "}
                    <a href="tel:+33767596228">+33767596228</a> <br />
                    Mon email:{" "}
                    <a href="mailto:lamtalsi.web@gmail.com">
                      lamtalsi.web@gmail.com
                    </a>
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="contact-form-box">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Nom</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Nom"
                            className="form-control"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="number">Numéro de téléphone</label>
                          <input
                            type="text"
                            name="number"
                            placeholder="Numéro de téléphone"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="subject">Sujet du courriel</label>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Sujet du courriel"
                            className="form-control"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label htmlFor="text">Message</label>
                          <textarea
                            name="text"
                            cols="30"
                            rows="6"
                            placeholder="Ecrivez votre message..."
                            className="form-control"
                            value={contact.text}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-border-radius"
                        >
                          Envoyer
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
