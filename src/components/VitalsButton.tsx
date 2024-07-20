import React, { useState } from 'react';

import { FloatingButton } from 'cs2/ui';

import { VitalsPanel } from './VitalsPanel';

export const VitalsButton = () => {
  const [showVitals, setShowVitals] = useState(false);

  return (
    <div>
      <FloatingButton selected={showVitals} onClick={() => setShowVitals((prev) => !prev)} />
      {showVitals && <VitalsPanel />}
    </div>
  );
};
