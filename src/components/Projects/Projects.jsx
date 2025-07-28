import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import pro1 from "../../assets/images/Screenshot (5).png";

function Projects() {
  return (
    <div className='projects-section container'>

      {/* Glowing Title */}
      <h2 className="projects-title glow-text">My Projects</h2>

      <div className="row justify-content-center project-row container">

        {[...Array(8)].map((_, index) => (
          <motion.div
            key={index}
            className="col-12 col-sm-8 col-md-5 col-lg-3 project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="https://your-project-link.com"
              className="project-image-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-container">
                <img src={pro1} alt={`Project ${index + 1}`} className="project-image" />
                <div className="overlay">View</div>
              </div>
            </a>

            <h3 className="project-title glow-text">Project Title</h3>
            <p className="project-description glow-text">
              Short description of the project goes here.
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Projects;
