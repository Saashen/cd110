import React, { useState, useEffect } from 'react';

import styles from './Main.module.css';

function Main() {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <h1 className={isMount ? styles.TitleTransition : styles.Title}>
          Greetings, I&apos;m
          <span className={styles.Name}> Oleksandra</span>
        </h1>
        <ul className={styles.MainInformation}>
          <li
            className={
              isMount
                ? styles.MainInformationPointTransition
                : styles.MainInformationPoint
            }
          >
            B. Sc. Computer Science student at&nbsp;
            <a
              className={styles.ExternalLink}
              href="https://iu.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              IU International University of Applied Sciences
            </a>
          </li>
          <li
            className={
              isMount
                ? styles.MainInformationPointTransition
                : styles.MainInformationPoint
            }
          >
            Frontend Developer at&nbsp;
            <a
              className={styles.ExternalLink}
              href="https://www.aptiv.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aptiv
            </a>
            , a company that creates Smart Vehicle Architecture and is one of
            the world&apos;s leading suppliers to the automotive industry
          </li>
          <li
            className={
              isMount
                ? styles.MainInformationPointTransition
                : styles.MainInformationPoint
            }
          >
            Technnologies I use:
            <div>
              HTML / CSS / JavaScript / TypeScript / React / Redux / Node.js /
              MongoDB / MySQL / Git / Jest
            </div>
          </li>
          <li
            className={
              isMount
                ? styles.MainInformationPointTransition
                : styles.MainInformationPoint
            }
          >
            Currently in Germany
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
