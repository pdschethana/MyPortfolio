import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6u9k8if",
        "template_15q34nj",
        form.current,
        "mGQxHhy03--IIY8D4"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or opportunities!
      </p>

      {/* Contact Details with Icons */}
      <div className="contact-details">
        <p>
          <FaEnvelope className="contact-icon" />{" "}
          <a href="mailto:supunichethana9@example.com">
            supunichethana9@example.com
          </a>
        </p>
        <p>
          <FaPhoneAlt className="contact-icon" />{" "}
          <a href="tel:+94771243316">+94 77 1243316</a> /{" "}
          <a href="tel:+94715129252">+94 71 5129252</a>
        </p>
        <p>
          <FaGithub className="contact-icon" />{" "}
          <a href="https://github.com/pdschethana" target="_blank" rel="noopener noreferrer">
            github.com/pdschethana
          </a>
        </p>
        <p>
          <FaLinkedin className="contact-icon" />{" "}
          <a
            href="https://www.linkedin.com/in/supuni-chethana-765753320"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supuni Chethana
          </a>
        </p>
        <p>
          <FaMapMarkerAlt className="contact-icon" /> Kalutara, Sri Lanka
        </p>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
