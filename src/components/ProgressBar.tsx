import React from 'react';

import styles from '../vitals.module.scss';

interface Data {
  percentage: number;
}

export const ProgressBar: React.FC<Data> = ({ percentage }) => (
  <div className={styles.progressBar}>
    <span
      className={`${styles.progressBarFill} ${backgroundColor(percentage)}`}
      style={{ width: `${percentage}%`, maxWidth: `100%` }}
    />
    <span className={styles.progressBarPercentage}>{percentage.toFixed(0)}%</span>
  </div>
);

const backgroundColor = (value: number): string => {
  if (value <= 40) return styles.bgRed;
  if (value <= 50) return styles.bgOrange;
  if (value <= 60) return styles.bgLightGreen;

  return styles.bgGreen;
};
