import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { FaUserAstronaut } from 'react-icons/fa';

function About() {
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
          <FaUserAstronaut className="about-icon" />
          About Me
        </motion.h1>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <p>
            Hello! I'm a passionate <strong>Front-End Developer</strong> with a strong foundation in web technologies and a creative eye for design.
            I recently completed a <strong>Front-End Development Diploma</strong> from <em>Bravo Company</em>, where I built real-world projects using
            <strong> HTML5, CSS3, JavaScript, Bootstrap, jQuery,</strong> and <strong>React</strong>.
          </p>

          <p>
            My journey into web development started from a deep curiosity about how websites work. What began as a hobby quickly turned into a professional path.
            I enjoy turning complex problems into clean, user-friendly interfaces.
          </p>

          <p>💡 <strong>What sets me apart:</strong></p>
          <ul>
            <li>I care deeply about <strong>responsive design, performance,</strong> and <strong>clean code</strong>.</li>
            <li>I'm always learning and improving to stay ahead in the ever-evolving world of front-end development.</li>
            <li>I believe in continuous growth, collaboration, and delivering meaningful user experiences.</li>
          </ul>

          <p>
            Whether it's building landing pages, interactive components, or full-scale web apps, I take pride in crafting digital experiences that make an impact.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
