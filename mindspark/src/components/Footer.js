import React from "react";
import "../css/Footer.css";
import phoneIcon from "../images/phone.png"; // Replace with your actual path
import whatsappIcon from "../images/whatsapp.png"; // Replace with your actual path
import instagramIcon from "../images/instapng.webp"; // Replace with your actual path
import emailIcon from "../images/mail.png"; // Replace with your actual path
import facebookIcon from "../images/facebook.png"; // Replace with your actual path
import logo from "../images/mindsparklogo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer text-light mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>
                <b>Contact Us</b>
              </h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-group mt-3">
                    <a href="tel:+91-9356214544" className="contact-link">
                      <img src={phoneIcon} alt="Phone" />
                      <span>+91-93562 14544</span>
                    </a>
                    <a
                      href="https://wa.me/9356214544"
                      className="contact-link mt-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={whatsappIcon} alt="WhatsApp" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-group mt-3">
                    <a
                      href="https://www.instagram.com/mindspark_edutech"
                      className="contact-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={instagramIcon} alt="Instagram" />
                      <span>Instagram</span>
                    </a>
                    <a
                      href="mailto:outreachmindsparkedutech@gmail.com"
                      className="contact-link mt-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={emailIcon} alt="Email" />
                      <span>outreachmindsparkedutech@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-group mt-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=61573248045579&mibextid"
                      className="contact-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={facebookIcon} alt="Facebook" />
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>
                <b>Office Address</b>
              </h3>
              <div className="address-info">
                <p>
                  Office No. 14, Meera Complex, Near Ideal Colony, Pune - 411038
                </p>
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30267.347337538657!2d73.7789191743164!3d18.509984700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb054367e1f%3A0xc5984eb97914d4b2!2sIdeal%20Square%2C%20Nav-Swaraj%20co-op%20HSG%20SOC!5e0!3m2!1sen!2sin!4v1740672985910!5m2!1sen!2sin"
                    width="75%"
                    height="100"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <img src={logo} alt="Logo" className="footer-logo" />
              <p className="copyright">
                © 2025 MindSpark EduTech Pvt. Ltd. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
