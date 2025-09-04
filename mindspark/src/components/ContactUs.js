import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../css/ContactUs.css";

export default function ContactUs() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Track errors

  const openPopup = () => {
    setIsPopupOpen(true);
    setIsSubmitted(false);
    setErrorMessage(""); // Reset error when reopening
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setIsSubmitted(false);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l2sb7n6", // Your EmailJS Service ID
        "template_9hy40c6", // Your EmailJS Template ID
        e.target,
        "B8_kV_-GnbLGy1nSU" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email Sent:", result.text);
          setIsSubmitted(true);
          e.target.reset(); // Reset form after success
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setErrorMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-us-block">
      <div className="contact-us-intro">
        <p className="fs-2">
          <b>FOR FREE DEMO</b>
        </p>
        <button className="contact-us-button" onClick={openPopup}>
          Contact Us
        </button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay show">
          <div className="popup-content show">
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <h3>Contact Us</h3>

            {isSubmitted ? (
              <div className="success-message">
                <p>Thank you for contacting us! Your message has been sent.</p>
              </div>
            ) : (
              <>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="tel" id="mobile" name="mobile" required />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
