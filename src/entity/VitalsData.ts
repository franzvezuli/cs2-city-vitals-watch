import { ValueBinding } from 'cs2/api';
import { IndicatorValue, infoview } from 'cs2/bindings';

interface VitalsData<T> {
  id: string;
  tooltip: string;
  iconSrc: string;
  valueBinding: ValueBinding<T>;
}

interface IndicatorValueBinding extends VitalsData<IndicatorValue> {}
interface NumberValueBinding extends VitalsData<number> {}
interface NumberArrayValueBinding extends VitalsData<number[]> {}

export type VitalsDataType = IndicatorValueBinding | NumberArrayValueBinding | NumberValueBinding;

export const VITAL_ID_TRAFFIC = 'traffic';
export const VITAL_ID_GARBAGE = 'garbage';
export const VITAL_ID_FIRE = 'fire';
export const VITAL_ID_POLICE_CRIME = 'police-crime';

export const vitalsData: VitalsDataType[] = [
  {
    id: 'parking',
    tooltip: 'Parking Availability',
    iconSrc: 'Media/Game/Icons/Parking.svg',
    valueBinding: infoview.parkingAvailability$,
  },
  {
    id: VITAL_ID_TRAFFIC,
    tooltip: 'Traffic Flow',
    iconSrc: 'Media/Game/Icons/Traffic.svg',
    valueBinding: infoview.trafficFlow$,
  },
  {
    id: 'electricity',
    tooltip: 'Electricity',
    iconSrc: 'Media/Game/Icons/Electricity.svg',
    valueBinding: infoview.electricityAvailability$,
  },
  {
    id: 'water',
    tooltip: 'Water',
    iconSrc: 'Media/Game/Icons/Water.svg',
    valueBinding: infoview.waterAvailability$,
  },
  {
    id: 'sewage',
    tooltip: 'Sewage',
    iconSrc: 'Media/Game/Icons/Sewage.svg',
    valueBinding: infoview.sewageAvailability$,
  },
  {
    id: 'healthcare',
    tooltip: 'Healthcare',
    iconSrc: 'Media/Game/Icons/Healthcare.svg',
    valueBinding: infoview.healthcareAvailability$,
  },
  {
    id: 'deathcare-crematorium',
    tooltip: 'Crematorium Availability',
    iconSrc: 'Media/Game/Icons/Deathcare.svg',
    valueBinding: infoview.deathcareAvailability$,
  },
  {
    id: 'deathcare-cemetery',
    tooltip: 'Cemetery Availability',
    iconSrc: 'Media/Game/Icons/Deathcare.svg',
    valueBinding: infoview.cemeteryAvailability$,
  },
  {
    id: VITAL_ID_GARBAGE,
    tooltip: 'Garbage Processing Rate (CS2 bug?)',
    iconSrc: 'Media/Game/Icons/Garbage.svg',
    valueBinding: infoview.garbageProcessingRate$,
  },
  {
    id: 'landfill',
    tooltip: 'Landfill Availability',
    iconSrc: 'Media/Game/Icons/Garbage.svg',
    valueBinding: infoview.landfillAvailability$,
  },
  {
    id: VITAL_ID_FIRE,
    tooltip: 'Fire Protection',
    iconSrc: 'Media/Game/Icons/FireSafety.svg',
    valueBinding: infoview.averageFireHazard$,
  },
  {
    id: 'shelter',
    tooltip: 'Shelter Availability',
    iconSrc: 'Media/Game/Icons/DisasterControl.svg',
    valueBinding: infoview.shelterAvailability$,
  },
  {
    id: 'police-jail',
    tooltip: 'Jail Availability',
    iconSrc: 'Media/Game/Icons/Police.svg',
    valueBinding: infoview.jailAvailability$,
  },
  {
    id: 'police-prison',
    tooltip: 'Prison Availability',
    iconSrc: 'Media/Game/Icons/Police.svg',
    valueBinding: infoview.prisonAvailability$,
  },
  {
    id: VITAL_ID_POLICE_CRIME,
    tooltip: 'Crime Probability',
    iconSrc: 'Media/Game/Icons/Police.svg',
    valueBinding: infoview.averageCrimeProbability$,
  },
  {
    id: 'education-elementary',
    tooltip: 'Elementary School Availability',
    iconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.elementaryAvailability$,
  },
  {
    id: 'education-high-school',
    tooltip: 'High School Availability',
    iconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.highSchoolAvailability$,
  },
  {
    id: 'education-college',
    tooltip: 'College Availability',
    iconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.collegeAvailability$,
  },
  {
    id: 'education-university',
    tooltip: 'University Availability',
    iconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.universityAvailability$,
  },
  {
    id: 'mail',
    tooltip: 'Mail Service Availability',
    iconSrc: 'Media/Game/Icons/PostService.svg',
    valueBinding: infoview.postServiceAvailability$,
  },
  {
    id: 'city-attractiveness',
    tooltip: 'City Attractiveness',
    iconSrc: 'Media/Game/Icons/Tourism.svg',
    valueBinding: infoview.attractiveness$,
  },
  {
    id: 'commercial-money',
    tooltip: 'Commercial Profitability',
    iconSrc: 'Media/Game/Icons/Money.svg',
    valueBinding: infoview.commercialProfitability$,
  },
  {
    id: 'industrial-money',
    tooltip: 'Industrial Profitability',
    iconSrc: 'Media/Game/Icons/Money.svg',
    valueBinding: infoview.industrialProfitability$,
  },
  {
    id: 'office-money',
    tooltip: 'Office Profitability',
    iconSrc: 'Media/Game/Icons/Money.svg',
    valueBinding: infoview.officeProfitability$,
  },
  {
    id: 'air-pollution',
    tooltip: 'Air Pollution',
    iconSrc: 'Media/Game/Icons/AirPollution.svg',
    valueBinding: infoview.averageAirPollution$,
  },
  {
    id: 'ground-pollution',
    tooltip: 'Ground Pollution',
    iconSrc: 'Media/Game/Icons/GroundPollution.svg',
    valueBinding: infoview.averageGroundPollution$,
  },
  {
    id: 'noise-pollution',
    tooltip: 'Noise Pollution',
    iconSrc: 'Media/Game/Icons/NoisePollution.svg',
    valueBinding: infoview.averageNoisePollution$,
  },
  {
    id: 'water-pollution',
    tooltip: 'Water Pollution',
    iconSrc: 'Media/Game/Icons/WaterPollution.svg',
    valueBinding: infoview.averageWaterPollution$,
  },
];
