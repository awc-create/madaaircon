"use client";

import React, { useState } from "react";
import styles from "./Contact.module.scss";

const serviceOptions: Record<string, string[]> = {
  Electrical: ["Wiring Installation", "Lighting Repair", "Circuit Breaker Issues"],
  Security: ["CCTV Installation", "Alarm Systems", "Access Control"],
  "Cooling Systems": ["AC Installation", "HVAC Maintenance", "Refrigeration Repair"],
};

// Validation Regex
const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
const phoneRegex = /^((((\+44\s?([0-6]|[8-9])\d{3} | \(?0([0-6]|[8-9])\d{3}\)?)\s?\d{3}\s?(\d{2}|\d{3}))|((\+44\s?([0-6]|[8-9])\d{3}|\(?0([0-6]|[8-9])\d{3}\)?)\s?\d{3}\s?(\d{4}|\d{3}))|((\+44\s?([0-6]|[8-9])\d{1}|\(?0([0-6]|[8-9])\d{1}\)?)\s?\d{4}\s?(\d{4}|\d{3}))|((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4})))$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const postcodeRegex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

const ContactForm: React.FC = () => {
  const [subServices, setSubServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    subject: "",
    subService: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
  });

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = e.target.value;
    setSubServices(serviceOptions[service] || []);
    setFormData({ ...formData, subject: service, subService: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "name" && value && !nameRegex.test(value)) {
      error = "Enter a valid full name.";
    }
    if (name === "email" && value && !emailRegex.test(value)) {
      error = "Enter a valid email.";
    }
    if (name === "phone" && value && !phoneRegex.test(value)) {
      error = "Enter a valid UK phone number.";
    }
    if (name === "postcode" && value && !postcodeRegex.test(value)) {
      error = "Enter a valid UK postcode.";
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err)) {
      alert("Please correct the highlighted errors before submitting.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Your request has been sent!");
        setFormData({
          name: "", email: "", phone: "", postcode: "", subject: "", subService: "", message: ""
        });
      } else {
        alert("Error sending message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>
        📞&nbsp;
        <a href="tel:+447908833222" className={styles.contactLink}>
          Call us: 07908 833 222
        </a>
        &nbsp;|&nbsp;
        💬&nbsp;
        <a
          href="https://wa.me/447908833222"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          WhatsApp us
        </a>
        &nbsp;|&nbsp;
        📧&nbsp;
        <a href="mailto:localmaintenance75@gmail.com" className={styles.contactLink}>
          Email us
        </a>
      </p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          placeholder="John Doe"
          onChange={handleInputChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          placeholder="example@email.com"
          onChange={handleInputChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        <label htmlFor="phone">Phone Number (UK) *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          placeholder="+44 7911 123456"
          onChange={handleInputChange}
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}

        <label htmlFor="postcode">Postcode (UK) *</label>
        <input
          type="text"
          id="postcode"
          name="postcode"
          required
          value={formData.postcode}
          placeholder="SW1A 1AA"
          onChange={handleInputChange}
        />
        {errors.postcode && <p className={styles.error}>{errors.postcode}</p>}

        <label htmlFor="service">Service *</label>
        <select
          id="service"
          name="subject"
          required
          value={formData.subject}
          onChange={handleServiceChange}
        >
          <option value="" disabled>
            Select a service
          </option>
          {Object.keys(serviceOptions).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>

        {subServices.length > 0 && (
          <>
            <label htmlFor="subService">Sub-Service *</label>
            <select
              id="subService"
              name="subService"
              required
              value={formData.subService}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select a sub-service
              </option>
              {subServices.map((sub, i) => (
                <option key={i} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </>
        )}

        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          placeholder="Write your message here..."
          onChange={handleInputChange}
        />

        <button type="submit" className={styles.submitButton}>
          Send Request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
