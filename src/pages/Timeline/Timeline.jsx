/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { FiBriefcase, FiMonitor, FiAward, FiBook } from 'react-icons/fi';

import styles from './Timeline.module.css';
import Modal from '../../components/Modal/Modal';

const Timeline = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [listItem, setListItem] = useState(0);

  const handleButtonClick = (number) => {
    setIsOpen(true);
    setListItem(number);
  };

  const closeModal = (e) => {
    if (
      (e.type === 'click' && e.target.nodeName === 'LI')
      || e.target.nodeName === 'UL'
      || e.target.nodeName === 'P'
    ) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <div className={styles.Timeline}>
      <div className={styles.Container}>
        {isOpen && <Modal closeModal={closeModal} listItem={listItem} />}
        <button
          onClick={() => handleButtonClick(1)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Apr 2022 - current ]</p>
          <FiBriefcase size={20} className={styles.Icon} title="Experience" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>Frontend Developer</h3>
            <p className={styles.Caption}>Aptiv</p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Sep 2021 - Current ]</p>
          <FiMonitor size={20} className={styles.Icon} title="Courses" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>
              CS50&apos;s Introduction to Computer Science
            </h3>
            <p className={styles.Caption}>HarvardX</p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Apr 2021 ]</p>
          <FiAward size={20} className={styles.Icon} title="Scholarship" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>Deutschlandstipendium</h3>
            <p className={styles.Caption}>Germany</p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(4)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Sep 2020 - Current ]</p>
          <FiBook size={20} className={styles.Icon} title="Education" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>B. Sc. Computer Science</h3>
            <p className={styles.Caption}>
              IU International University of Applied Sciences
            </p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(5)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Mar 2020 - Oct 2020 ]</p>
          <FiBriefcase size={20} className={styles.Icon} title="Experience" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>Frontend Developer</h3>
            <p className={styles.Caption}>Freelance</p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(6)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Feb 2019 - Sep 2020 ]</p>
          <FiMonitor size={20} className={styles.Icon} title="Courses" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>Full Stack Developer Certificate</h3>
            <p className={styles.Caption}>GoIT</p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(7)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Jun 2020 ]</p>
          <FiAward size={20} className={styles.Icon} title="Certificate" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>IELTS Academic</h3>
            <p className={styles.Caption}>British Council</p>
          </div>
        </button>
        <button
          onClick={() => handleButtonClick(8)}
          type="button"
          className={styles.SmallExperience}
        >
          <p className={styles.Time}>[ Jan 2020 ]</p>
          <FiAward size={20} className={styles.Icon} title="Certificate" />
          <div className={styles.SmallInfo}>
            <h3 className={styles.Title}>DELF B1</h3>
            <p className={styles.Caption}>Institut Français</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
