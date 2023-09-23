export interface F1Result {
  POS: string;
  NO: number;
  DRIVER: string;
  CAR: string;
  LAPS: number;
  'TIME/RETIRED': string;
  PTS: number;
  [key: string]: string | number;
}