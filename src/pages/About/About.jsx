import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div className={styles.About}>
    <div className={styles.Container}>
      <p className={styles.Point}>
        My programming path started in Kyiv, Ukraine 2019.
        I joined a Full Stack Development certificate program at GoIT for a year and a half.
        After dozens of projects, hundreds of hours of hard work, and thousands of solved problems
        (technical and not), I have become a proud alumnus of GoIT.
      </p>
      <p className={styles.Point}>
        However, I felt that my knowledge was quite narrow.
        My curiosity wanted to discover more, to reach the ground principles of programming.
        So, I decided that the Covid summer of 2020 is a perfect time to start
        a Bachelor&apos;s program in Computer Science in Germany.
      </p>
      <p className={styles.Point}>
        After other dozens of projects, hundreds of hours of hard work, and thousands
        of solved problems, I think I will be a proud holder of a Bachelor&apos;s degree.
        I am extremely happy to study, do my favorite things at work, and still have
        that feeling &apos;I&apos;ve finally got it!&apos;.
      </p>
      <p className={styles.Point}>Technnologies I use:</p>
      <p className={styles.Point}>
        HTML / CSS / JavaScript / TypeScript / React / Redux / Node.js / MongoDB /
        MySQL / Git / Jest
      </p>
      {/* <p className={styles.Point}>
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
      </p> */}
    </div>
    <div className={styles.BackgroundImage} />
  </div>
);

export default About;
