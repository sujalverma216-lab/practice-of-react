import { useState, useRef } from "react";
import api from "../lib/api";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");  
  const [errorField, setErrorField] = useState("");
  const nameRegex = /^[A-Z][a-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /^.{10,}$/;
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSave = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setErrorField("name");
      nameRef.current.focus();
      return;
    } else if (!nameRegex.test(name)) {
      alert("Invalid Name! Try Again. ");
      setErrorField("name");
      nameRef.current.focus();
      return;
    }

    if (email.trim() === "") {
      setErrorField("email");
      emailRef.current.focus();
      return;
    } else if (!emailRegex.test(email)) {
      alert("Enter a valid Email Address.");
      setErrorField("email");
      emailRef.current.focus();
      return;    
    }

    if (message.trim() === "") {
      setErrorField("message");
      messageRef.current.focus();
      return;
    } else if (!messageRegex.test(message)) {
      alert("Message should contain at least 10 characters.");
      setErrorField("message");
      messageRef.current.focus();
      return;
    }    

    setErrorField("");

    try {
      await api.post("/contact", {
        name,
        email,
        message
      });
      alert("Message Sent Successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-container">

        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to contact us.</p>

        <div className="contact-info">

          <div className="contact-card">
            <h3>📍 Address</h3>
            <p>New Delhi, Delhi-110095</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>support@eternaledu.com</p>
          </div>

          <div className="contact-card">
            <h3>📞 Phone</h3>
            <p>+91 9315292028</p>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSave}>

          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrorField("");
            }}
            className={errorField === "name" ? "error" : ""}
          />

          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorField("");
            }}
            className={errorField === "email" ? "error" : ""}
          />

          <textarea
            ref={messageRef}
            rows="5"
            placeholder="Enter your Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrorField("");
            }}
            className={errorField === "message" ? "error" : ""}
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>
    </div>
  );
}

export default Contact;
