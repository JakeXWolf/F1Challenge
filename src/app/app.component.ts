import { Component, OnInit } from '@angular/core';

class ConstructorChamp {
  Name: string = '';
  TotalPoints: number = 0;
  Drivers: string[] = [];
  DriverNumbers: number[] = [];

  public constructor(init?: Partial<ConstructorChamp>) {
    Object.assign(this, init);
  }
}

class ConstructorOrder {
  Name: string = '';
  AssignedOrder: number = 0;
  Position: number = 0;
  Driver: string = '';
  
  public constructor(assignedOrder: number) {
    this.AssignedOrder = assignedOrder;
  }
}

interface F1Result {
  POS: string;
  NO: number;
  DRIVER: string;
  CAR: string;
  LAPS: number;
  'TIME/RETIRED': string;
  PTS: number;
  [key: string]: string | number;
}

interface Formula1Driver {
  POS: number;
  NO: number;
  DRIVER: string;
  NATIONALITY: string;
  CAR: string;
  PTS: number;
  [key: string]: string | number;
}

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

  ngOnInit() {
    this.createOrderDisplay();
    this.setConstructorTeams();

    //test
    this.raceResultsInput = this.raceResultsStr;
    this.setConstructor();
  }

  private setConstructorTeams() {
    this.constructorNames.forEach((x) => {
      this.constructorTeams.push(
        new ConstructorChamp({ Name: x, Drivers: [] })
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
  // method written by Chat GPT
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

    let tmp: { position: number; driver: string; number: number }[] = [];
    drivers.forEach((x) => {
      tmp.push({ position: x.POS, driver: x.DRIVER, number: x.NO });
    });

    this.f1DriversChampionship = tmp;
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

    let driverList: number[] = this.listIndex < 7 ? this.topDrivers : this.secondDrivers;

    // takes random index of drivers and gets the drivers name
    const indexSelected = Math.floor(Math.random() * driverList.length);
    let driverLabel = this.f1DriversChampionship[driverList[indexSelected] - 1];

    this.constructorDisplay[this.listIndex].Position = driverLabel.position;

    let conIndex = this.constructorTeams.findIndex(
      (x) => x.Name === this.constructorDisplay[this.listIndex].Name
    );

    let driver = driverLabel.driver;

    if (driverLabel.position == 14) {
      driver = 'Best of the Rest!';
    }

    this.constructorDisplay[this.listIndex].Driver = driver;
    this.constructorTeams[conIndex].Drivers.push(driver);
    this.constructorTeams[conIndex].DriverNumbers.push(driverLabel.number);

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
        let result = this.raceResults.find((x) => x.DRIVER === driver);
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
      {
        Name: 'Gabe',
        TotalPoints: 34,
        Drivers: ['Carlos Sainz', 'Lando Norris'],
        DriverNumbers: [],
      },
      {
        Name: 'Zac',
        TotalPoints: 25,
        Drivers: ['Sergio Perez', 'Lance Stroll'],
        DriverNumbers: [],
      },
      {
        Name: 'Nick',
        TotalPoints: 21,
        Drivers: ['George Russell', 'Nico Hulkenberg'],
        DriverNumbers: [],
      },
      {
        Name: 'Jimmer',
        TotalPoints: 20,
        Drivers: ['Max Verstappen', 'Alexander Albon'],
        DriverNumbers: [],
      },
      {
        Name: 'Jake',
        TotalPoints: 15,
        Drivers: ['Charles Leclerc', 'Oscar Piastri'],
        DriverNumbers: [],
      },
      {
        Name: 'Kristin',
        TotalPoints: 13,
        Drivers: ['Fernando Alonso', 'Pierre Gasly'],
        DriverNumbers: [],
      },
      {
        Name: 'Joey',
        TotalPoints: 10,
        Drivers: ['Lewis Hamilton', 'Esteban Ocon'],
        DriverNumbers: [],
      },
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

  // can be automated by number of drivers we have
  topDrivers: number[] = [1, 2, 3, 4, 5, 6, 7];
  secondDrivers: number[] = [8, 9, 10, 11, 12, 13, 14];

  f1DriversChampionship = [
    { position: 1,  number: 0, driver: 'Max Verstappen' },
    { position: 2,  number: 0, driver: 'Sergio Perez' },
    { position: 3,  number: 0, driver: 'Fernando Alonso' },
    { position: 4,  number: 0, driver: 'Lewis Hamilton' },
    { position: 5,  number: 0, driver: 'Carlos Sainz' },
    { position: 6,  number: 0, driver: 'George Russell' },
    { position: 7,  number: 0, driver: 'Charles Leclerc' },
    { position: 8,  number: 0, driver: 'Lance Stroll' },
    { position: 9,  number: 0, driver: 'Lando Norris' },
    { position: 10, number: 0,  driver: 'Esteban Ocon' },
    { position: 11, number: 0,  driver: 'Oscar Piastri' },
    { position: 12, number: 0,  driver: 'Pierre Gasly' },
    { position: 13, number: 0,  driver: 'Alexander Albon' },
    { position: 14, number: 0,  driver: 'Nico Hulkenberg' },
    { position: 15, number: 0,  driver: 'Valtteri Bottas' },
    { position: 16, number: 0,  driver: 'Zhou Guanyu' },
    { position: 17, number: 0,  driver: 'Yuki Tsunoda' },
    { position: 18, number: 0,  driver: 'Kevin Magnussen' },
    { position: 19, number: 0,  driver: 'Logan Sargeant' },
    { position: 20, number: 0,  driver: 'DANNY' },
  ];

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

  // const parsedResults = this.parseF1Results(resultsString);
  // console.log(parsedResults);

  hungaryChamp: ConstructorChamp[] = [
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Gabe',
      Drivers: ['Max Verstappen', 'Esteban Ocon'],
    }),
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Nick',
      Drivers: ['Fernando Alonso', 'Lando Norris'],
    }),
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Joey',
      Drivers: ['George Russell', 'Best of the Rest!'],
    }),
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Kristin',
      Drivers: ['Charles Leclerc', 'Lance Stroll'],
    }),
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Jake',
      Drivers: ['Carlos Sainz', 'Pierre Gasly'],
    }),
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Jimmer',
      Drivers: ['Lewis Hamilton', 'Alexander Albon'],
    }),
    new ConstructorChamp({
      TotalPoints: 0,
      Name: 'Zac',
      Drivers: ['Sergio Perez', 'Oscar Piastri'],
    }),
  ];
}