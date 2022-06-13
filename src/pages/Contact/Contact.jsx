import React from 'react';
import { FiGithub, FiAtSign, FiLinkedin } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => (
  <div className={styles.Contact}>
    <div className={styles.Container}>
      <a
        className={styles.Link}
        href="mailto:oleksandra.ablitsova@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiAtSign size={44} color="#FF0000" />
        oleksandra.ablitsova@gmail.com
      </a>
      <a
        className={styles.Link}
        href="http://https://github.com/Saashen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub size={44} />
        Saashen
      </a>
      <a
        className={styles.Link}
        href="http://https://www.linkedin.com/in/oleksandra-ablitsova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin size={44} color="#0077b5" />
        Oleksandra Ablitsova
      </a>
    </div>
  </div>
);

export default Contact;
