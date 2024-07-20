import { ValueBinding } from 'cs2/api';
import { IndicatorValue, infoview } from 'cs2/bindings';

interface VitalsData<T> {
  id: string;
  tooltip: string;
  mainIconSrc: string;
  secondaryIconSrc?: string;
  valueBinding: ValueBinding<T>;
}

interface IndicatorValueBinding extends VitalsData<IndicatorValue> {}
interface NumberValueBinding extends VitalsData<number> {}
interface NumberArrayValueBinding extends VitalsData<number[]> {}

export type VitalsDataType = IndicatorValueBinding | NumberArrayValueBinding | NumberValueBinding;

export const vitalsData: VitalsDataType[] = [
  {
    id: 'parking',
    tooltip: 'Parking Availability',
    mainIconSrc: 'Media/Game/Icons/Parking.svg',
    valueBinding: infoview.parkingAvailability$,
  },
  {
    id: 'traffic',
    tooltip: 'Traffic Flow',
    mainIconSrc: 'Media/Game/Icons/Traffic.svg',
    valueBinding: infoview.trafficFlow$,
  },
  {
    id: 'electricity',
    tooltip: 'Electricity',
    mainIconSrc: 'Media/Game/Icons/Electricity.svg',
    valueBinding: infoview.electricityAvailability$,
  },
  {
    id: 'water',
    tooltip: 'Water',
    mainIconSrc: 'Media/Game/Icons/Water.svg',
    valueBinding: infoview.waterAvailability$,
  },
  {
    id: 'sewage',
    tooltip: 'Sewage',
    mainIconSrc: 'Media/Game/Icons/Sewage.svg',
    valueBinding: infoview.sewageAvailability$,
  },
  {
    id: 'healthcare',
    tooltip: 'Healthcare',
    mainIconSrc: 'Media/Game/Icons/Healthcare.svg',
    valueBinding: infoview.healthcareAvailability$,
  },
  {
    id: 'deathcare-crematorium',
    tooltip: 'Crematorium Availability',
    mainIconSrc: 'Media/Game/Icons/Deathcare.svg',
    valueBinding: infoview.deathcareAvailability$,
  },
  {
    id: 'deathcare-cemetery',
    tooltip: 'Cemetery Availability',
    mainIconSrc: 'Media/Game/Icons/Deathcare.svg',
    valueBinding: infoview.cemeteryAvailability$,
  },
  {
    id: 'garbage',
    tooltip: 'Garbage Processing Rate (CS2 bug?)',
    mainIconSrc: 'Media/Game/Icons/Garbage.svg',
    valueBinding: infoview.garbageProcessingRate$,
  },
  {
    id: 'landfill',
    tooltip: 'Landfill Availability',
    mainIconSrc: 'Media/Game/Icons/Garbage.svg',
    valueBinding: infoview.landfillAvailability$,
  },
  {
    id: 'fire',
    tooltip: 'Fire Protection',
    mainIconSrc: 'Media/Game/Icons/FireSafety.svg',
    valueBinding: infoview.averageFireHazard$,
  },
  {
    id: 'shelter',
    tooltip: 'Shelter Availability',
    mainIconSrc: 'Media/Game/Icons/DisasterControl.svg',
    valueBinding: infoview.shelterAvailability$,
  },
  {
    id: 'police-jail',
    tooltip: 'Jail Availability',
    mainIconSrc: 'Media/Game/Icons/Police.svg',
    valueBinding: infoview.jailAvailability$,
  },
  {
    id: 'police-prison',
    tooltip: 'Prison Availability',
    mainIconSrc: 'Media/Game/Icons/Police.svg',
    valueBinding: infoview.prisonAvailability$,
  },
  {
    id: 'police-crime',
    tooltip: 'Crime Probability',
    mainIconSrc: 'Media/Game/Icons/Police.svg',
    valueBinding: infoview.averageCrimeProbability$,
  },
  {
    id: 'education-elementary',
    tooltip: 'Elementary School Availability',
    mainIconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.elementaryAvailability$,
  },
  {
    id: 'education-high-school',
    tooltip: 'High School Availability',
    mainIconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.highSchoolAvailability$,
  },
  {
    id: 'education-college',
    tooltip: 'College Availability',
    mainIconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.collegeAvailability$,
  },
  {
    id: 'education-university',
    tooltip: 'University Availability',
    mainIconSrc: 'Media/Game/Icons/Education.svg',
    valueBinding: infoview.universityAvailability$,
  },
  {
    id: 'mail',
    tooltip: 'Mail Service Availability',
    mainIconSrc: 'Media/Game/Icons/PostService.svg',
    valueBinding: infoview.postServiceAvailability$,
  },
  {
    id: 'city-attractiveness',
    tooltip: 'City Attractiveness',
    mainIconSrc: 'Media/Game/Icons/Tourism.svg',
    valueBinding: infoview.attractiveness$,
  },
  {
    id: 'commercial-money',
    tooltip: 'Commercial Profitability',
    mainIconSrc: 'Media/Game/Icons/Money.svg',
    valueBinding: infoview.commercialProfitability$,
  },
  {
    id: 'industrial-money',
    tooltip: 'Industrial Profitability',
    mainIconSrc: 'Media/Game/Icons/Money.svg',
    valueBinding: infoview.industrialProfitability$,
  },
  {
    id: 'office-money',
    tooltip: 'Office Profitability',
    mainIconSrc: 'Media/Game/Icons/Money.svg',
    valueBinding: infoview.officeProfitability$,
  },
  {
    id: 'air-pollution',
    tooltip: 'Air Pollution',
    mainIconSrc: 'Media/Game/Icons/AirPollution.svg',
    valueBinding: infoview.averageAirPollution$,
  },
  {
    id: 'ground-pollution',
    tooltip: 'Ground Pollution',
    mainIconSrc: 'Media/Game/Icons/GroundPollution.svg',
    valueBinding: infoview.averageGroundPollution$,
  },
  {
    id: 'noise-pollution',
    tooltip: 'Noise Pollution',
    mainIconSrc: 'Media/Game/Icons/NoisePollution.svg',
    valueBinding: infoview.averageNoisePollution$,
  },
  {
    id: 'water-pollution',
    tooltip: 'Water Pollution',
    mainIconSrc: 'Media/Game/Icons/WaterPollution.svg',
    valueBinding: infoview.averageWaterPollution$,
  },
];
