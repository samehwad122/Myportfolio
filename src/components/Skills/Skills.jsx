import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

import html from "../../assets/images/HTML5.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/javascript.png";
import jq from "../../assets/images/jquery.png";
import bootstrap from "../../assets/images/Bootstrap.png";
import tailwind from "../../assets/images/Tailwind.png";
import react from "../../assets/images/React.png";
import git from "../../assets/images/git.png";
import githup from "../../assets/images/GitHub.png";
import teamwork from "../../assets/images/teamwork.webp";
import framerMotion from "../../assets/images/framer-motion.png";

function Skills() {
  return (
    <div className="skills-section">
      <motion.h2
                initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
      className="skills-title">🚀 My Skills</motion.h2>

      <div className="skills-grid">

        {/* 1 - HTML (يمين) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={html} alt="HTML" className="skill-img" />
          <p className="glow-text">HTML</p>
        </motion.div>

        {/* 2 - CSS (شمال) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={css} alt="CSS" className="skill-img" />
          <p className="glow-text">CSS</p>
        </motion.div>

        {/* 3 - JavaScript (يمين) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={js} alt="JavaScript" className="skill-img" />
          <p className="glow-text">JavaScript</p>
        </motion.div>

        {/* 4 - jQuery (شمال) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={jq} alt="jQuery" className="skill-img" />
          <p className="glow-text">jQuery</p>
        </motion.div>

        {/* 5 - Bootstrap (يمين) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={bootstrap} alt="Bootstrap" className="skill-img" />
          <p className="glow-text">Bootstrap</p>
        </motion.div>

        {/* 6 - Tailwind (شمال) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={tailwind} alt="Tailwind" className="skill-img" />
          <p className="glow-text">Tailwind</p>
        </motion.div>

        {/* 7 - React (يمين) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={react} alt="React" className="skill-img" />
          <p className="glow-text">React</p>
        </motion.div>

        {/* 8 - Framer Motion (شمال) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={framerMotion} alt="Framer Motion" className="skill-img" />
          <p className="glow-text">Framer Motion</p>
        </motion.div>

        {/* 9 - Git (يمين) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={git} alt="Git" className="skill-img" />
          <p className="glow-text">Git</p>
        </motion.div>

        {/* 10 - GitHub (شمال) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={githup} alt="GitHub" className="skill-img" />
          <p className="glow-text">GitHub</p>
        </motion.div>

        {/* 11 - Teamwork (يمين) */}
        <motion.div className="orb-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <img src={teamwork} alt="Teamwork" className="skill-img" />
          <p className="glow-text">Teamwork</p>
        </motion.div>

      </div>
    </div>
  );
}

export default Skills;
