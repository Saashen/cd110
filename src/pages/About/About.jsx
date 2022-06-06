import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div className={styles.About}>
    <div className={styles.Container}>
      <p className={styles.Point}>
        Courage, independence, and craving for beauty characterize me as a
        person and employee.
      </p>
      <p className={styles.Point}>
        I am a person that follows her passions, despite any circumstances.
      </p>
      <p className={styles.Point}>
        I like to solve problems. I understand that for some solutions you just need more time.
      </p>
      <p className={styles.Point}>
        I combine many roles in my life, and I try to keep them all in balance.
        You will not find me working 12 hours per day, but most of times I will do my work
        with pleasure.
      </p>
    </div>
  </div>
);

export default About;
