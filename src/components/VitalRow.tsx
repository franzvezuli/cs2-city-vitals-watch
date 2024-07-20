import React from 'react';

import { Icon, Tooltip } from 'cs2/ui';

import styles from './../vitals.module.scss';
import { ProgressBar } from './ProgressBar';

interface Data {
  tooltip: string;
  mainIconSrc: string;
  percentage: number;
}

export const VitalRow: React.FC<Data> = ({ tooltip, mainIconSrc, percentage }) => (
  <Tooltip tooltip={tooltip}>
    <div className={styles.vitalRow}>
      <Icon className={styles.iconXSpace} src={mainIconSrc} />
      <ProgressBar percentage={percentage} />
    </div>
  </Tooltip>
);
