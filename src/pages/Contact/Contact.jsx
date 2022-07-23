import React from 'react';
import {
  FiGithub, FiAtSign, FiLinkedin, FiMapPin,
} from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.Contact}>
    <div className={styles.Container}>
      <h3 className={styles.Header}>Contact me:</h3>
      <a
        className={styles.Link}
        href="mailto:oleksandra.ablitsova@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiAtSign size={20} color="#FF0000" />
        <p className={styles.Text}>oleksandra.ablitsova@iubh.de</p>
      </a>

      <a
        className={styles.Link}
        href="http://https://www.linkedin.com/in/oleksandra-ablitsova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin size={20} color="#0077b5" />
        <p className={styles.Text}>Oleksandra Ablitsova</p>
      </a>
      <a
        className={styles.Link}
        href="http://https://github.com/Saashen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub size={20} />
        <p className={styles.Text}>Saashen</p>
      </a>
      <a href="https://goo.gl/maps/UjAPcV2DkPB73DRG6" className={styles.Link}>
        <FiMapPin size={20} color="#0F9D58" />
        <p className={styles.Text}>Cologne, Germany</p>
      </a>
    </div>
  </div>
);

export default Contact;
