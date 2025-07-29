import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import img from '../../assets/images/download.png';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Home() {
  return (
    <div className="hero-transparent">
      
      {/* Avatar image inside glowing circle with orbits */}
      <motion.div
        className="avatar-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="orbit-container">
          <div className="orbit orbit1"></div>
          <div className="orbit orbit2"></div>

          <div className="glow-avatar">
            <img src={img} alt="Sameh Mohamed" />
          </div>
        </div>
      </motion.div>

      {/* Name and glowing description */}
      <motion.h1
        className="glow-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Sameh Mohamed
      </motion.h1>

      <motion.p
        className="glow-text hero-subtext"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        A passionate Front-End Developer specialized in building interactive and responsive user interfaces using React.
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/1lcW0OSArEGTt4036eGTWpi16__Az6uX3/view?usp=sharing"
        download
        className="download-btn-fancy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        📄 Download CV
      </motion.a>

      {/* Glowing social icons inside circles */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.a
          href="https://github.com/samehwad122"
          target="_blank"
          className="icon-glow circle-icon"
          whileHover={{ scale: 1.3, rotate: 10 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/%D9%8Dsameh-mohamed-2a0a46376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="icon-glow circle-icon"
          whileHover={{ scale: 1.3, rotate: -10 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/share/1Y8YD6KEKj/"
          target="_blank"
          className="icon-glow circle-icon"
          whileHover={{ scale: 1.3, rotate: 10 }}
        >
          <FaFacebook />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Home;
