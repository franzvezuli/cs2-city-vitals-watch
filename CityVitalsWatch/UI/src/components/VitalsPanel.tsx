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
        <Tooltip tooltip="v0.1.2">
          <div>City Vitals Watch</div>
        </Tooltip>
      }
      className={styles.panel}>
      <Scrollable style={{ maxHeight: '52vh' }}>
        <PanelSection>
          {data.map((it) => (
            <VitalRow
              key={it.id}
              tooltip={it.tooltip}
              iconSrc={it.iconSrc}
              percentage={it.percentage}
            />
          ))}
        </PanelSection>
      </Scrollable>
    </Panel>
  );
};
