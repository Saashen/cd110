import React from 'react';

import styles from './Personality.module.css';
import ChartComponent from '../../components/ChartComponent/ChartComponent';

const Personality = () => (
  <div className={styles.Personality}>
    <p className={styles.Text}>
      The test shows that my character is mostly balanced, as my reaction
      depends on the situation, environment, and mood. However, my level of
      agreeableness is quite low. I am organized and goal-oriented
      (conscientiousness).
    </p>
    <ChartComponent />
  </div>
);

export default Personality;
