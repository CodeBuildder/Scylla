import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Contact() {
  return (
    <section id="contact">
      <div class="inner-width">
        <h1 class="section-title">Get in Touch</h1>
        <div id="error"></div>

        <form action="index2.php" method="post" class="contact-form">
          <input
            type="text"
            name="name"
            id="name"
            class="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            class="email"
            placeholder="Your Email"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            class="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            class="message"
            placeholder="Message"
          ></textarea>
          <button type="submit" id="submit" class="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
