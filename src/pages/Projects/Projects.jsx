/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './Projects.module.css';

const Projects = () => (
  <div className={styles.Container}>
    <a
      href="https://cleaning-plus.com.ua/"
      width="400px"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.Link}
    >
      <div className={styles.Card}>
        <img
          className={styles.Screenshot}
          src="https://res.cloudinary.com/saashen/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency//v1658510198/CSCD/cleaning_crn6ns.jpg"
          alt="Cleaning+"
        />
        <h3 className={styles.Header}>Cleaning+</h3>
        <p className={styles.Text}>
          JavaScript, Intersection Observer
        </p>
      </div>
    </a>
    <a
      href="https://saashen-hw-04-movies.netlify.app/"
      width="400px"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.Link}
    >
      <div className={styles.Card}>
        <img
          className={styles.Screenshot}
          src="https://res.cloudinary.com/saashen/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency//v1658510203/CSCD/moviestowatch_gl2wyv.jpg"
          alt="Movie to Watch"
        />
        <h3 className={styles.Header}>Movie to Watch</h3>
        <p className={styles.Text}>React, React Router</p>
      </div>
    </a>
    <a
      href="https://saashen.github.io/goit-react-hw-03-image-finder/"
      width="400px"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.Link}
    >
      <div className={styles.Card}>
        <img
          className={styles.Screenshot}
          src="https://res.cloudinary.com/saashen/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency//v1658510202/CSCD/images_nyifch.jpg"
          alt="Image Finder"
        />
        <h3 className={styles.Header}>Image Finder</h3>
        <p className={styles.Text}>React, Modal</p>
      </div>
    </a>
  </div>
);

export default Projects;
