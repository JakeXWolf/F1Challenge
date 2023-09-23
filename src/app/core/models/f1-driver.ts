export interface Formula1Driver {
  POS: number;
  NO: number;
  DRIVER: string;
  NATIONALITY: string;
  CAR: string;
  PTS: number;
  [key: string]: string | number;
}