import React from 'react';
import {
  FiBriefcase, FiMonitor, FiAward, FiBook,
} from 'react-icons/fi';
import styles from './Timeline.module.css';

// import ExperienceTemplate from '../../components/ExperienceTemplate/ExperienceTemplate';

// const responsibilitiesAptiv = [
//   'Adding new features to the current projects',
//   'Fixing & Debugging',
//   'Unit-testing',
// ];

// const resposibilitiesFreelance = [
//   'Creating landings, business card websites',
//   'Editing existing websites',
//   'Communicating with clients',
//   'Deploying code on hostings',
//   'Setting up SSL certificates',
// ];

// const [company, setCompany] = useState('Aptiv');

const Timeline = () => (
  <div className={styles.Timeline}>
    <div className={styles.Container}>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Apr 2022 - current ]</p>
        <FiBriefcase size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>Frontend Developer</h3>
          <p>Aptiv</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Sep 2021 - Current ]</p>
        <FiMonitor size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>CS50&apos;s Introduction to Computer Science</h3>
          <p>HarvardX</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Apr 2021 ]</p>
        <FiAward size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>Deutschlandstipendium</h3>
          <p>Germany</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Sep 2020 - Current ]</p>
        <FiBook size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>B. Sc. Computer Science</h3>
          <p>IU International University of Applied Sciences</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Mar 2020 - Oct 2020 ]</p>
        <FiBriefcase size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>Frontend Developer</h3>
          <p>Freelance</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Feb 2019 - Sep 2020 ]</p>
        <FiMonitor size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>Full Stack Developer</h3>
          <p>GoIT</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Jun 2020 ]</p>
        <FiAward size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>IELTS Academic 6.5</h3>
          <p>British Council</p>
        </div>
      </div>
      <div className={styles.SmallExperience}>
        <p className={styles.Time}>[ Jan 2020 ]</p>
        <FiAward size={20} className={styles.Icon} />
        <div className={styles.SmallInfo}>
          <h3 className={styles.Title}>DELF B1</h3>
          <p>Institut Français</p>
        </div>
      </div>
      {/* {company === 'Aptiv' && (
          <ExperienceTemplate
            title="Frontend Developer"
            time="[ Apr 2022 - current ]"
            location="Wuppertal, Germany"
            responsibilities={responsibilitiesAptiv}
            stack="TypeScript, React Hooks, React Context, Jest"
          />
        )}
        {company === 'Freelance' && (
          <ExperienceTemplate
            title="Frontend Developer"
            time="[ Mar 2020 - Oct 2020 ]"
            location="Kyiv, Ukraine"
            responsibilities={resposibilitiesFreelance}
          />
        )} */}
      {/* <p>EDUCATION AND TRAINING</p>
      <p>
        CS50&apos;s Introduction to Computer Science HarvardX
        [ Sep 2021 &U+2013 Current ]

      </p>
      <p>
        B. Sc. Computer Science IU International
        University of Applied Sciences
      </p>
      <p> [ Sep 2020 &U+2013 Current ]</p>
      <p>
        Address:
        Mülheimer Str. 38, 53604 Bad Honnef (Germany)
      </p>
      <p>https://www.iu.de/</p>
      <p>
        Full Stack
        Developer
      </p>
      <p>GoIT [ Feb 2019 &U+2013 Sep 2020 ]</p>
      <p> Address: Kyiv (Ukraine)</p>
      <p>https://goit.ua/</p>
      <p>HTML/CSS JavaScript React Node.js</p> */}
    </div>

    {/* HONOURS AND AWARDS
    Deutschlandstipendium [ Apr 2021 ] IELTS Academic British Council [ Jun 2020
    ] Score 6.5 DELF B1 Institut Français [ Jan 2020 ] DIGITAL SKILLS
    Development HTML / MongoDB / CSS / Javascript / React / Node.js / Redux /
    Java / C / Git */}
  </div>
);

export default Timeline;
