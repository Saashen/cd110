import React from 'react';

import styles from './Main.module.css';

function Main() {
  // const [isMainLoaded, setIsMainLoaded] = useState(false);
  // const [isPointLoaded, setIsPointLoaded] = useState(false);

  // useEffect(() => {
  //   setIsMainLoaded(true);
  //   const timer = setTimeout(() => setIsPointLoaded(true), 5000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <div className={styles.InformationContainer}>
          <h1 className={styles.Title}>
            Greetings, I&apos;m
            <span className={styles.Name}> Oleksandra</span>
          </h1>

          <ul className={styles.MainInformation}>
            <li className={styles.MainInformationPoint}>
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
            <li className={styles.MainInformationPoint}>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
