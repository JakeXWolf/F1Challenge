import { Component, OnInit } from '@angular/core';

import { ConstructorChamp } from './core/models/constructor-champ';
import { ConstructorOrder } from './core/models/constructor-order';
import { F1Result } from './core/models/f1-results';
import { Formula1Driver } from './core/models/f1-driver';
import { TestData } from './core/services/test-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'F1Challenge';

  constructorFirstOrder: string[] = [];
  constructorSecondOrder: string[] = [];
  constructorDisplay: ConstructorOrder[] = [];
  constructorTeams: ConstructorChamp[] = [];

  isOpeningPage: boolean = true;
  isPreRaceWeekend: boolean = false;
  isPreRaceConstructSetup: boolean = false;
  isPreRaceConstructGeneration: boolean = false;

  driversChampJson: string = '';
  constructorTeamsJson: string = '';

  isPostRaceWeekend: boolean = false;
  isPostRaceEnterResults: boolean = false;
  isPostRaceResultsEntered: boolean = false;

  raceResultsInput: string = '';
  raceResults: F1Result[] = [];

  // can be automated by number of drivers we have
  topDrivers: number[] = [1, 2, 3, 4, 5, 6, 7];
  secondDrivers: number[] = [8, 9, 10, 11, 12, 13, 14];

  f1DriversChampionship: Formula1Driver[] = [];
  f1DriversOptions: Formula1Driver[] = [];
  driverList: Formula1Driver[] = [];

  constructor(public testData: TestData) {}

  ngOnInit() {
    this.createOrderDisplay();
    this.setConstructorTeams();

    this.driverList = this.testData.getDrivers();

    //test
    this.raceResultsInput = this.raceResultsStr;
    this.setConstructor();
    this.setDriversChampJson();
  }

  private setConstructorTeams() {
    this.constructorNames.forEach((x) => {
      this.constructorTeams.push(
        new ConstructorChamp({
          Name: x,
          Drivers: [{ NO: 0 } as Formula1Driver, { NO: 0 } as Formula1Driver],
          DriverNumbers: [],
        })
      );
    });
  }

  // Opening Page -> PreRace Step 1 (Drivers champ)
  onPreRaceWeekend() {
    this.isOpeningPage = false;
    this.isPreRaceWeekend = true;
  }

  // PreRace Step 1 (Drivers champ) -> Opening Page
  onDriversChampGoBack() {
    this.isPreRaceWeekend = false;
    this.isOpeningPage = true;
    window.scroll(0, 0);
  }

  // PreRace Step 1 (Drivers champ) -> PreRace Step 2 (Constructors)
  onDriversChampApproved() {
    this.isPreRaceWeekend = false;
    this.isPreRaceConstructSetup = true;
    window.scroll(0, 0);
  }

  // PreRace Step 2 (Constructors) -> PreRace Step 1 (Drivers champ)
  onConstructChampGoBack() {
    this.isPreRaceConstructSetup = false;
    this.isPreRaceWeekend = true;
    window.scroll(0, 0);
  }

  // PreRace Step 2 (Constructors) -> PreRace Step 3 (Generation)
  onConstructChampApproved() {
    this.isPreRaceConstructSetup = false;
    this.isPreRaceConstructGeneration = true;
    window.scroll(0, 0);
  }

  // PreRace Step 3 (Generation) -> PreRace Step 2 (Constructors)
  onConstructDraftGoBack() {
    this.isPreRaceConstructGeneration = false;
    this.isPreRaceConstructSetup = true;
    window.scroll(0, 0);
  }

  // takes string copied from f1 page and parses into f1DriversChampionship obj
  // method inspired by Chat GPT
  onSetDriversChampJson() {
    const input = this.driversChampJson;
    const lines = input.trim().split('\n');
    const headers = lines[0].split('\t');
    const data = lines.slice(1).map((line) => line.split('\t'));

    let drivers = data.map((row) => {
      const driver: Formula1Driver = {} as Formula1Driver;
      headers.forEach((header, index) => {
        const value = row[index];
        if (header === 'POS' || header === 'PTS') {
          driver[header] = parseInt(value, 10);
        } else {
          driver[header] = value;
        }
      });
      return driver;
    });

    drivers.forEach((x) => {
      x.NO = this.driverList.find((d) => d.DRIVER === x.DRIVER)?.NO as number;
    });

    this.f1DriversChampionship = drivers;
  }

  // Grand Prix Team Json
  onGetConstructorTeamsJson() {
    this.constructorTeamsJson = JSON.stringify(this.constructorTeams);
  }

  onSetConstructorTeamsJson() {
    this.constructorTeams = JSON.parse(this.constructorTeamsJson);
  }

  // Constructor Random Order Generation
  onGenerateConstructorOrder() {
    this.constructorDisplay = [];
    this.createOrderDisplay();

    // empty out constructor teams drivers (precaution)
    this.constructorTeams.forEach((x) => (x.Drivers = []));

    while (this.constructorNames.length) {
      const indexSelected = Math.floor(
        Math.random() * this.constructorNames.length
      );

      this.constructorFirstOrder.push(this.constructorNames[indexSelected]);
      this.constructorSecondOrder.push(this.constructorNames[indexSelected]);

      this.constructorDisplay[7 - this.constructorNames.length].Name +=
        this.constructorNames[indexSelected];
      this.constructorDisplay[6 + this.constructorNames.length].Name +=
        this.constructorNames[indexSelected];

      this.constructorNames.splice(indexSelected, 1);
    }
  }

  private createOrderDisplay() {
    for (let i: number = 1; i < 15; i++) {
      this.constructorDisplay.push(new ConstructorOrder(i));
    }
  }

  listIndex: number = 0;

  onDriverSelection() {
    if (this.listIndex > 13) {
      return;
    }

    let driverList: number[] =
      this.listIndex < 7 ? this.topDrivers : this.secondDrivers;

    // takes random index of drivers and gets the drivers name
    const indexSelected = Math.floor(Math.random() * driverList.length);
    let driver = this.f1DriversChampionship[driverList[indexSelected] - 1];

    this.constructorDisplay[this.listIndex].Position = driver.POS;

    let conIndex = this.constructorTeams.findIndex(
      (x) => x.Name === this.constructorDisplay[this.listIndex].Name
    );

    if (driver.POS == 14) {
      driver.DRIVER = 'Best of the Rest!';
      let bestOfRest = this.f1DriversChampionship.slice(13, 20);
      bestOfRest.forEach((x) => {
        this.constructorTeams[conIndex].DriverNumbers.push(x.NO);
      });
    } else {
      this.constructorTeams[conIndex].DriverNumbers.push(driver.NO);
    }

    this.constructorDisplay[this.listIndex].Driver = driver.DRIVER;

    this.constructorTeams[conIndex].Drivers.push(driver);

    if (this.listIndex < 7) {
      this.topDrivers.splice(indexSelected, 1);
    } else {
      this.secondDrivers.splice(indexSelected, 1);
    }

    this.listIndex++;
    this.onGetConstructorTeamsJson();
  }

  onDriverSelectionForAll() {
    while (this.listIndex < 14) {
      this.onDriverSelection();
    }
  }

  ////////////////////////////////////////////////////////////

  // Opening Page -> PostRace Step 1 (Constructors Champ)
  onPostRaceWeekend() {
    this.isOpeningPage = false;
    this.setUpDriversListDropDown();
    this.isPostRaceWeekend = true;
  }

  // PostRace Step 1 (Constructors Champ) -> Opening Page
  onPostRaceConstructorGoBack() {
    this.isPostRaceWeekend = false;
    this.isOpeningPage = true;
  }

  // PostRace Step 1 (Constructors Champ) -> PostRace Step 2 (Results)
  onPostRaceConstructorComplete() {
    this.isPostRaceWeekend = false;

    this.isPostRaceEnterResults = true;
  }

  // PostRace Step 2 (Results) -> PostRace Step 1 (Constructors Champ)
  onPostRaceEnterResultsGoBack() {
    this.isPostRaceEnterResults = false;
    this.isPostRaceWeekend = true;
  }

  isDriversEntered: boolean = false;

  onPostRaceSetConstructorTeamsJson() {
    this.onSetConstructorTeamsJson();
    this.isDriversEntered = true;
  }

  setUpDriversListDropDown() {
    if (!this.f1DriversChampionship.length && this.f1DriversChampionship.length === 0) {
      this.onSetDriversChampJson();
    }
    this.f1DriversOptions = this.f1DriversChampionship.slice(0,14)
    this.f1DriversOptions[13].DRIVER = 'Best Of The Rest!';
  }

  setUpConstructorNumbers() {
    this.constructorTeams.forEach(x => {
      x.DriverNumbers.push(x.Drivers[0].NO);
      if (x.Drivers[1].DRIVER === 'Best Of The Rest!') {
        let bestOfRest = this.f1DriversChampionship.slice(13, 20);
        bestOfRest.forEach((d) => {
          x.DriverNumbers.push(d.NO);
        });
      } else {
        x.DriverNumbers.push(x.Drivers[1].NO);
      }
    });
  }

  // Parse Race Results
  // method written by Chat GPT
  parseF1Results(resultsString: string): F1Result[] {
    const rows = resultsString.trim().split('\n');
    const header = rows[0].split('\t');
    const f1Results: F1Result[] = [];

    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split('\t');
      const f1Result: F1Result = {} as F1Result;

      for (let j = 0; j < header.length; j++) {
        const columnName = header[j];
        const columnValue = columns[j];

        if (
          columnName === 'NO' ||
          columnName === 'LAPS' ||
          columnName === 'PTS'
        ) {
          f1Result[columnName] = parseInt(columnValue, 10);
        } else {
          f1Result[columnName] = columnValue;
        }
      }

      f1Results.push(f1Result);
    }

    return f1Results;
  }

  onCalculateConstructors() {
    this.raceResults = this.parseF1Results(this.raceResultsInput);

    this.constructorTeams.forEach((team) => {
      team.Drivers.forEach((driver) => {
        let result = this.raceResults.find((x) => x.NO === driver.NO);
        team.TotalPoints += result ? result.PTS : 0;
      });
    });

    this.constructorTeams.sort((a, b) => b.TotalPoints - a.TotalPoints);

    // if the race is a sprint, do not clear out the drivers for each constructor
    if (this.raceResults[0].PTS > 12) {
      this.constructorTeams.forEach((x) => {
        x.Drivers = [];
      });
    }

    this.constructorTeamsJson = JSON.stringify(this.constructorTeams);
    this.isPostRaceResultsEntered = true;
  }

  ////////////////////////////   'autofilled' data   /////////////////////////////

  private setConstructor() {
    this.constructorTeams = [
      { Name: 'Jimmer', TotalPoints: 90, Drivers: [], DriverNumbers: [] },
      { Name: 'Joey', TotalPoints: 90, Drivers: [], DriverNumbers: [] },
      { Name: 'Gabe', TotalPoints: 81, Drivers: [], DriverNumbers: [] },
      { Name: 'Jake', TotalPoints: 78, Drivers: [], DriverNumbers: [] },
      { Name: 'Nick', TotalPoints: 72, Drivers: [], DriverNumbers: [] },
      { Name: 'Zac', TotalPoints: 71, Drivers: [], DriverNumbers: [] },
      { Name: 'Kristin', TotalPoints: 63, Drivers: [], DriverNumbers: [] },
    ];

    this.isDriversEntered = true;
  }

  constructorNames: string[] = [
    'Jake',
    'Joey',
    'Gabe',
    'Zac',
    'Nick',
    'Kristin',
    'Jimmer',
  ];

  // f1DriversChampionshipTest = [
  //   { position: 1, driver: 'Max Verstappen', number: 0 },
  //   { position: 2, driver: 'Sergio Perez', number: 0 },
  //   { position: 3, driver: 'Fernando Alonso', number: 0 },
  //   { position: 4, driver: 'Lewis Hamilton', number: 0 },
  //   { position: 5, driver: 'Carlos Sainz', number: 0 },
  //   { position: 6, driver: 'Charles Leclerc', number: 0 },
  //   { position: 7, driver: 'George Russell', number: 0 },
  //   { position: 8, driver: 'Lando Norris', number: 0 },
  //   { position: 9, driver: 'Lance Stroll', number: 0 },
  //   { position: 10, driver: 'Pierre Gasly', number: 0 },
  //   { position: 11, driver: 'Esteban Ocon', number: 0 },
  //   { position: 12, driver: 'Oscar Piastri', number: 0 },
  //   { position: 13, driver: 'Alexander Albon', number: 0 },
  //   { position: 14, driver: 'Nico Hulkenberg', number: 0 },
  //   { position: 15, driver: 'Valtteri Bottas', number: 0 },
  //   { position: 16, driver: 'Zhou Guanyu', number: 0 },
  //   { position: 17, driver: 'Yuki Tsunoda', number: 0 },
  //   { position: 18, driver: 'Kevin Magnussen', number: 0 },
  //   { position: 19, driver: 'Logan Sargeant', number: 0 },
  //   { position: 20, driver: 'Nyck De Vries', number: 0 },
  //   { position: 21, driver: 'Daniel Ricciardo', number: 0 },
  //   { position: 22, driver: 'Liam Lawson', number: 0 },
  // ];

  // // Test the function with the provided results string
  raceResultsStr: string = `
  POS	NO	DRIVER	CAR	LAPS	TIME/RETIRED	PTS
  1	1	Max Verstappen	RED BULL RACING HONDA RBPT	70	1:38:08.634	26
  2	4	Lando Norris	MCLAREN MERCEDES	70	+33.731s	18
  3	11	Sergio Perez	RED BULL RACING HONDA RBPT	70	+37.603s	15
  4	44	Lewis Hamilton	MERCEDES	70	+39.134s	12
  5	81	Oscar Piastri	MCLAREN MERCEDES	70	+62.572s	10
  6	63	George Russell	MERCEDES	70	+65.825s	8
  7	16	Charles Leclerc	FERRARI	70	+70.317s	6
  8	55	Carlos Sainz	FERRARI	70	+71.073s	4
  9	14	Fernando Alonso	ASTON MARTIN ARAMCO MERCEDES	70	+75.709s	2
  10	18	Lance Stroll	ASTON MARTIN ARAMCO MERCEDES	69	+1 lap	1
  11	23	Alexander Albon	WILLIAMS MERCEDES	69	+1 lap	0
  12	77	Valtteri Bottas	ALFA ROMEO FERRARI	69	+1 lap	0
  13	3	Daniel Ricciardo	ALPHATAURI HONDA RBPT	69	+1 lap	0
  14	27	Nico Hulkenberg	HAAS FERRARI	69	+1 lap	0
  15	22	Yuki Tsunoda	ALPHATAURI HONDA RBPT	69	+1 lap	0
  16	24	Zhou Guanyu	ALFA ROMEO FERRARI	69	+1 lap	0
  17	20	Kevin Magnussen	HAAS FERRARI	69	+1 lap	0
  18	2	Logan Sargeant	WILLIAMS MERCEDES	67	DNF	0
  NC	31	Esteban Ocon	ALPINE RENAULT	2	DNF	0
  NC	10	Pierre Gasly	ALPINE RENAULT	1	DNF	0
  `;

  setDriversChampJson() {
    this.driversChampJson = `
    POS	DRIVER	NATIONALITY	CAR	PTS
1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	374
2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	223
3	Lewis Hamilton	GBR	MERCEDES	180
4	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	170
5	Carlos Sainz	ESP	FERRARI	142
6	Charles Leclerc	MON	FERRARI	123
7	George Russell	GBR	MERCEDES	109
8	Lando Norris	GBR	MCLAREN MERCEDES	97
9	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	47
10	Pierre Gasly	FRA	ALPINE RENAULT	45
11	Oscar Piastri	AUS	MCLAREN MERCEDES	42
12	Esteban Ocon	FRA	ALPINE RENAULT	36
13	Alexander Albon	THA	WILLIAMS MERCEDES	21
14	Nico Hulkenberg	GER	HAAS FERRARI	9
15	Valtteri Bottas	FIN	ALFA ROMEO FERRARI	6
16	Zhou Guanyu	CHN	ALFA ROMEO FERRARI	4
17	Yuki Tsunoda	JPN	ALPHATAURI HONDA RBPT	3
18	Kevin Magnussen	DEN	HAAS FERRARI	3
19	Liam Lawson	NZL	ALPHATAURI HONDA RBPT	2
20	Logan Sargeant	USA	WILLIAMS MERCEDES	0
21	Nyck De Vries	NED	ALPHATAURI HONDA RBPT	0
22	Daniel Ricciardo	AUS	ALPHATAURI HONDA RBPT	0
    `;
  }

  // const parsedResults = this.parseF1Results(resultsString);
  // console.log(parsedResults);
}