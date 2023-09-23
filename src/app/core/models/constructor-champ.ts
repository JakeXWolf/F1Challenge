import { Formula1Driver } from "./f1-driver";

export class ConstructorChamp {
  Name: string = '';
  TotalPoints: number = 0;
  Drivers: Formula1Driver[] = [];
  DriverNumbers: number[] = [];

  public constructor(init?: Partial<ConstructorChamp>) {
    Object.assign(this, init);
  }
}