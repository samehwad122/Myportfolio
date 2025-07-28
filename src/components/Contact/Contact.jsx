import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

function Contact() {
  return (
    <div>
      <motion.div
        className="hero-transparent my-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          🌟 Contact Me
        </motion.h2>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I'm always open to collaboration, freelancing, or just a friendly hello!
        </motion.p>

        {/* وسائل التواصل */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="circle-icon icon-glow"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="circle-icon icon-glow"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="circle-icon icon-glow"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="circle-icon icon-glow"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noreferrer"
            className="circle-icon icon-glow"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:example@email.com"
            className="circle-icon icon-glow"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+201234567890"
            className="circle-icon icon-glow"
            title="Phone"
          >
            <FaPhoneAlt />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contact;
