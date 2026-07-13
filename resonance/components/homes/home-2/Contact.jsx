"use client";

import { useState } from "react";

export default function Contact({ heading }) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState("");
  
  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear status messages when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setErrorMessage("All fields are required. Please fill out the form completely.");
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");
    
    try {
      // Send POST request to API route
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setSubmitStatus("success");
        // Clear form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Error from server
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      // Network or other error
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please check your connection and try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : "Contact Us"}
            </span>
            <span className="text-outline-1">
              {heading ? heading : "Contact Us"}
            </span>
            <span className="text-outline">
              {heading ? heading : "Contact Us"}
            </span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">How?</span> Have a question?
            Just drop us a line via email. Code V is available for new projects
            and interesting ideas.
          </p>
          <div>
            <a
              href="mailto:00codev00@gmail.com"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              00codev00@gmail.com
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="form contact-form wow fadeInUp"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                Your Name
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your name here"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                Email Address
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your email here"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                What’s your question?
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  type="submit"
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                  disabled={isSubmitting}
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip pt-30 pt-sm-20">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
              className="mt-3"
            >
              {submitStatus === "success" && (
                <div className="alert alert-success" style={{ 
                  padding: "15px", 
                  marginTop: "20px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  border: "1px solid #c3e6cb",
                  borderRadius: "4px"
                }}>
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="alert alert-danger" style={{ 
                  padding: "15px", 
                  marginTop: "20px",
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  border: "1px solid #f5c6cb",
                  borderRadius: "4px"
                }}>
                  ✗ {errorMessage}
                </div>
              )}
            </div>
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
