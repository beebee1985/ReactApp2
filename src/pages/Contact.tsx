import React, { useState } from "react";
import "./Contact.css";

/**
 * Interface for form data structure
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Interface for form errors
 */
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for form errors
  const [errors, setErrors] = useState<FormErrors>({});

  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Validates the form data
   * @returns true if form is valid, false otherwise
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form input changes
   * @param e - Change event from input/textarea
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  /**
   * Handles form submission
   * @param e - Form submit event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log("Form submitted:", formData);

      // Show success message
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="contact-container">
      {/* Page Header */}
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? Feel free to reach out!</p>
      </header>

      <div className="contact-content">
        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send Me a Message</h2>

          {isSubmitted && (
            <div className="success-message">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="Your name"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            {/* Subject Input */}
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? "error" : ""}
                placeholder="What is this about?"
              />
              {errors.subject && (
                <span className="error-message">{errors.subject}</span>
              )}
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "error" : ""}
                placeholder="Your message..."
                rows={6}
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Ontario, Canada</p>
            </div>
            <div className="info-item">
              <h3>Response Time</h3>
              <p>Usually within 24-48 hours</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
