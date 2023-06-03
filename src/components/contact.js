import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send("service_q90w1zt", "template_jhguv18", {
      from_name: name,
      to_name: "Prashant",
      from_email: email,
      to_email: "prashantlamichhane68@gmail.com",
      message: message},
       "uTSvpl4TOebhuUVpe") 
       .then(
        () => {
          setLoading(false);
          alert("Sent! Your Thank you for your time. I will get back to you as soon as possible.");

          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Sorry for the trouble, something went wrong. Please try again.");
        }
      );
  
    };
  
    return (
      <form className="formContainer" onSubmit={sendEmail}>
        <h2>Contact Me</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <input type="submit" value="Send" />
      </form>
    );
  };

export default ContactForm;
