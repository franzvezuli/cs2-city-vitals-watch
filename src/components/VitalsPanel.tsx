import React from 'react';

import { Panel, PanelSection, Scrollable, Tooltip } from 'cs2/ui';

import { vitalsData } from '../entity/VitalsData';
import { calculatePercentage } from '../lib/calculations';
import styles from '../vitals.module.scss';
import { VitalRow } from './VitalRow';

export const VitalsPanel: React.FC = () => {
  const data = vitalsData.map((it) => ({
    ...it,
    percentage: calculatePercentage(it),
  }));

  return (
    <Panel
      header={
        <Tooltip tooltip={'v0.1.0'}>
          <div>City Vitals Watch</div>
        </Tooltip>
      }
      className={styles.panel}>
      <Scrollable style={{ maxHeight: '52vh' }}>
        <PanelSection>
          {data.map((item, index) => (
            <VitalRow
              key={index}
              tooltip={item.tooltip}
              mainIconSrc={item.mainIconSrc}
              percentage={item.percentage}
            />
          ))}
        </PanelSection>
      </Scrollable>
    </Panel>
  );
};
