import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const Modal = ({ closeModal, listItem }) => (
  <button
    type="button"
    className={styles.Overlay}
    onClick={(e) => closeModal(e)}
  >
    <div className={styles.Modal}>
      {listItem === 1 && (
        <ul>
          <p className={styles.Title}>Responsibilities:</p>
          <li className={styles.Point}>
            Adding new features to the current projects
          </li>
          <li className={styles.Point}>Fixing & Debugging</li>
          <li className={styles.Point}>Unit-testing</li>
        </ul>
      )}
      {listItem === 2 && (
        <ul>
          <p className={styles.Title}>Content:</p>
          <li className={styles.Point}>C</li>
          <li className={styles.Point}>Python</li>
          <li className={styles.Point}>SQL</li>
          <li className={styles.Point}>JavaScript</li>
        </ul>
      )}
      {listItem === 3 && (
        <p className={styles.Point}>Proud of it, nothing to tell more</p>
      )}
      {listItem === 4 && (
        <>
          <ul>
            <p className={styles.Title}>GPA:</p>
            <li className={styles.Point}>1.8 (German system)</li>
          </ul>
          <ul className={styles.Margin}>
            <p className={styles.Title}>Favorite subjects:</p>
            <li className={styles.Point}>Mathematics</li>
            <li className={styles.Point}>
              Principles of Research & Academic Writing
            </li>
            <li className={styles.Point}>Programming Workshop II: Web</li>
            <li className={styles.Point}>Introduction to Design Thinking</li>
          </ul>
        </>
      )}
      {listItem === 5 && (
        <ul>
          <p className={styles.Title}>Responsibilities:</p>
          <li className={styles.Point}>
            Creating landings, business card websites
          </li>
          <li className={styles.Point}>Editing existing websites</li>
          <li className={styles.Point}>Communicating with clients</li>
          <li className={styles.Point}>Deploying code on hostings</li>
          <li className={styles.Point}>Setting up SSL certificates</li>
        </ul>
      )}
      {listItem === 6 && (
        <ul>
          <p className={styles.Title}>Content:</p>
          <li className={styles.Point}>HTML/CSS</li>
          <li className={styles.Point}>JavaScript</li>
          <li className={styles.Point}>React & Redux</li>
          <li className={styles.Point}>Node.js</li>
        </ul>
      )}
      {listItem === 7 && (
        <ul>
          <p className={styles.Title}>Score:</p>
          <li className={styles.Point}>6.5</li>
        </ul>
      )}
      {listItem === 8 && (
        <p className={styles.Point}>Proud of it, nothing to tell more</p>
      )}
    </div>
  </button>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  listItem: PropTypes.number.isRequired,
};

export default Modal;
