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
  const [selectedService, setSelectedService] = useState<string>("");
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

  // Handle service selection
  const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const service = event.target.value;
    setSelectedService(service);
    setSubServices(serviceOptions[service] || []);
    setFormData({ ...formData, subject: service, subService: "" });
  };

  // Handle input validation
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    let error = "";

    if (name === "name" && !nameRegex.test(value)) {
      error = "Enter a valid full name.";
    }
    if (name === "email" && !emailRegex.test(value)) {
      error = "Enter a valid email.";
    }
    if (name === "phone" && !phoneRegex.test(value)) {
      error = "Enter a valid UK phone number.";
    }
    if (name === "postcode" && !postcodeRegex.test(value)) {
      error = "Enter a valid UK postcode.";
    }

    setErrors({ ...errors, [name]: error });
  };

  // Submit form
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if any validation errors exist
    if (Object.values(errors).some((err) => err)) {
      alert("Please correct the highlighted errors before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your request has been sent!");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Us</h1>
      <p>Fill in the form below and we'll get back to you as soon as possible.</p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        {/* Name */}
        <label htmlFor="name">Full Name *</label>
        <input type="text" id="name" name="name" required value={formData.name} placeholder="John Doe" onChange={handleInputChange} />
        {errors.name && <p className={styles.error}>{errors.name}</p>}

        {/* Email */}
        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" required value={formData.email} placeholder="example@email.com" onChange={handleInputChange} />
        {errors.email && <p className={styles.error}>{errors.email}</p>}

        {/* Phone */}
        <label htmlFor="phone">Phone Number (UK) *</label>
        <input type="tel" id="phone" name="phone" required value={formData.phone} placeholder="+44 7911 123456" onChange={handleInputChange} />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}

        {/* Postcode */}
        <label htmlFor="postcode">Postcode (UK) *</label>
        <input type="text" id="postcode" name="postcode" required value={formData.postcode} placeholder="SW1A 1AA" onChange={handleInputChange} />
        {errors.postcode && <p className={styles.error}>{errors.postcode}</p>}

        {/* Service Selection */}
        <label htmlFor="service">Service *</label>
        <select id="service" name="subject" required value={formData.subject} onChange={handleServiceChange}>
          <option value="" disabled>Select a service</option>
          {Object.keys(serviceOptions).map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>

        {/* Sub-Service Selection */}
        {subServices.length > 0 && (
          <>
            <label htmlFor="subService">Sub-Service *</label>
            <select id="subService" name="subService" required value={formData.subService} onChange={handleInputChange}>
              <option value="" disabled>Select a sub-service</option>
              {subServices.map((sub, index) => (
                <option key={index} value={sub}>{sub}</option>
              ))}
            </select>
          </>
        )}

        {/* Message */}
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={5} required value={formData.message} placeholder="Write your message here..." onChange={handleInputChange} />

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>Send Request</button>
      </form>
    </div>
  );
};

export default ContactForm;
