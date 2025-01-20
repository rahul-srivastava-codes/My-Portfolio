import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const serviceId = "your_service_id";
    const templateId = "your_template_id";
    const userId = "your_user_id";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <div
      className="contact-form-container"
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f7f8fc",
        borderRadius: "10px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            resize: "none",
            height: "120px",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
      {status && (
        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "16px",
            color: status.includes("success") ? "green" : "red",
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
