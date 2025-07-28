import React from 'react'
import { motion } from 'framer-motion';
import { FaMedal  } from 'react-icons/fa';

function Certificates() {
  return (
      <div className="about-transparent my-5">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <FaMedal  className="about-icon" />
        certificates
        </motion.h1>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
         
Front-End Development Diploma
Bravo Company – 2025
Completed a comprehensive diploma program focused on modern front-end technologies including HTML5, CSS3, JavaScript, Bootstrap, jQuery, and React.
Gained hands-on experience through real-world projects and responsive web design practices.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Certificates
