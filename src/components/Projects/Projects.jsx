import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import pro1 from "../../assets/images/img-pro/darkStore.png";
import pro2 from "../../assets/images/img-pro/pasket.png";
import pro3 from "../../assets/images/img-pro/papa.png";
import pro4 from "../../assets/images/img-pro/fresh.png";
import pro5 from "../../assets/images/img-pro/pro-css.png";

function Projects() {
  return (
    <div className='projects-section container'>

      {/* Glowing Title */}
      <h2 className="projects-title glow-text">My Projects</h2>

      <div className="row justify-content-center project-row container">

        {/* Project Card 1 */}
        <motion.div
          className="col-12 col-sm-8 col-md-5 col-lg-3 project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://project-react-sameh-1.netlify.app"
            className="project-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src={pro1} alt="DarkLook Store" className="project-image" />
              <div className="overlay">View</div>
            </div>
          </a>
          <h3 className="project-title glow-text">DarkLook Store</h3>
          <p className="project-description glow-text">
            E-commerce store built with React and styled components.
          </p>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          className="col-12 col-sm-8 col-md-5 col-lg-3 project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://shopping-store-mzmy-c2y6erxg3-abdelmageedbahers-projects.vercel.app/"
            className="project-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src={pro2} alt="Pasket Project" className="project-image" />
              <div className="overlay">View</div>
            </div>
          </a>
          <h3 className="project-title glow-text">Pasket Project</h3>
          <p className="project-description glow-text">
            Grocery delivery and shopping UI project designed with React technology
          </p>
        </motion.div>
        <motion.div
          className="col-12 col-sm-8 col-md-5 col-lg-3 project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://sameh-mohamed-project-papajohns.netlify.app/"
            className="project-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src={pro3} alt="Pasket Project" className="project-image" />
              <div className="overlay">View</div>
            </div>
          </a>
          <h3 className="project-title glow-text">Papa John's restaurant</h3>
          <p className="project-description glow-text">
            Papa John's restaurant project designed using React and API using supabase
          </p>
        </motion.div>
        <motion.div
          className="col-12 col-sm-8 col-md-5 col-lg-3 project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://samehwad122.github.io/project-js/"
            className="project-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src={pro4} alt="Pasket Project" className="project-image" />
              <div className="overlay">View</div>
            </div>
          </a>
          <h3 className="project-title glow-text">fresh meal store</h3>
          <p className="project-description glow-text">
            Fruit and vegetable store designed using html, css and javascript
          </p>
        </motion.div>
        <motion.div
          className="col-12 col-sm-8 col-md-5 col-lg-3 project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://samehwad122.github.io/project-css/"
            className="project-image-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src={pro5} alt="Pasket Project" className="project-image" />
              <div className="overlay">View</div>
            </div>
          </a>
          <h3 className="project-title glow-text">Games store</h3>
          <p className="project-description glow-text">
            Design an online store to sell games using HTML and CSS
          </p>
        </motion.div>


      </div>
    </div>
  );
}

export default Projects;
