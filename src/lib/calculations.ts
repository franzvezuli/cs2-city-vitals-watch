import { ValueBinding, useValue } from 'cs2/api';
import { IndicatorValue, infoview } from 'cs2/bindings';

import { VitalsDataType } from '../entity/VitalsData';

export function calculatePercentage(vital: VitalsDataType): number {
  switch (vital.id) {
    case 'traffic':
      return calculateTrafficPercentage();
    case 'garbage':
      return calculateGarbagePercentage();
    case 'fire':
      return inversePercentage(
        calculateIndicatorPercentage(vital.valueBinding as ValueBinding<IndicatorValue>),
      );
    case 'police-crime':
      console.log(useValue(vital.valueBinding as ValueBinding<IndicatorValue>));

      return inversePercentage(
        calculateIndicatorPercentage(vital.valueBinding as ValueBinding<IndicatorValue>),
      );
    default:
      return calculateIndicatorPercentage(vital.valueBinding as ValueBinding<IndicatorValue>);
  }
}

function calculateTrafficPercentage() {
  const traffic = useValue(infoview.trafficFlow$);

  return traffic.reduce((acc, value) => acc + value, 0) / traffic.length;
}

function calculateGarbagePercentage() {
  const garbageProcessing = useValue(infoview.garbageProcessingRate$);
  const garbageProduction = useValue(infoview.garbageProductionRate$);

  return (garbageProcessing / garbageProduction) * 100;
}

function inversePercentage(percentage: number) {
  return 100 - percentage;
}

function calculateIndicatorPercentage(binding: ValueBinding<IndicatorValue>): number {
  const { min: minValue, current: currentValue, max: maxValue } = useValue(binding);

  // If all values are 0, either the buildings aren't unlocked, or are shut down
  if (minValue === 0 && currentValue === 0 && maxValue === 0) {
    return 0;
  }

  return ((currentValue - minValue) / (maxValue - minValue)) * 100;
}
