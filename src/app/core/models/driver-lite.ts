import { Formula1Driver } from "./f1-driver";

export class DriverLite {
  NO: number;
  DRIVER: string;

  public constructor(driver: Formula1Driver) {
    this.NO = driver.NO;
    this.DRIVER = driver.driver;
  }
}