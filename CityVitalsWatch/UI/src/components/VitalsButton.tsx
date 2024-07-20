import React, { useState } from 'react';

import { FloatingButton } from 'cs2/ui';

import styles from '../vitals.module.scss';
import vitalsIcon from './../resources/vitals-icon.svg';
import { VitalsPanel } from './VitalsPanel';

export const VitalsButton = () => {
  const [showVitals, setShowVitals] = useState(false);

  return (
    <div>
      <FloatingButton
        src={vitalsIcon}
        className={styles.icon}
        selected={showVitals}
        onClick={() => setShowVitals((prev) => !prev)}
      />
      {showVitals && <VitalsPanel />}
    </div>
  );
};
