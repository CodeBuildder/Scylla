import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const [successMessage, setSuccessMessage] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("https://ksmailer.herokuapp.com/send", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setSuccessMessage(true);
        } else {
          setFailedMessage(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setFailedMessage(true);
      });
  };

  return (
    <section id="contact">
      <div className="inner-width">
        <h1 className="title">Get in Touch</h1>
        <div className="section-title"></div>
        <div id="error"></div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          {successMessage && (
            <div>
              <h4 className="successMessage">
                Hey, you have successfully reached out to Kaushik! Will get back
                to you soon!
              </h4>
            </div>
          )}
          {failedMessage && (
            <div>
              <h4 className="failedMessage">
                Mmmmm, Looks like the server is down at the moment. Do try again
                later!
              </h4>
            </div>
          )}
          <input
            type="text"
            name="name"
            className="name"
            required
            {...register("name")}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            className="email"
            {...register("email")}
            required
            placeholder="Your Email"
          />
          <input
            type="text"
            name="subject"
            required
            {...register("subject")}
            className="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            className="message"
            placeholder="Message"
            {...register("message")}
            required
          ></textarea>

          <button type="submit" id="submit" className="btn">
            Submit
          </button>
        </form>
        <span className="formNote">
          Hey guys, kindly wait for 2-3 minutes for the confirmation message to
          appear!
        </span>
      </div>
    </section>
  );
}
