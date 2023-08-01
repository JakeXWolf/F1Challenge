import { Component, OnInit } from '@angular/core';

class ConstructorChamp {
  Name: string = '';
  TotalPoints: number = 0;
  Drivers: string[] = [];

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

class RaceResult {
  Position: number = 0;
  Driver: string = '';

  public constructor(init?: Partial<RaceResult>) {
    Object.assign(this, init);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'F1Challenge';

  constructorNames: string[] = [
    'Jake',
    'Joey',
    'Gabe',
    'Zac',
    'Nick',
    'Kristin',
    'Jimmer',
  ];

  topDrivers: number[] = [1, 2, 3, 4, 5, 6, 7];
  secondDrivers: number[] = [8, 9, 10, 11, 12, 13, 14];

  f1DriversChampionship = [
    { position: 1, driver: 'Max Verstappen' },
    { position: 2, driver: 'Sergio Perez' },
    { position: 3, driver: 'Fernando Alonso' },
    { position: 4, driver: 'Lewis Hamilton' },
    { position: 5, driver: 'Carlos Sainz' },
    { position: 6, driver: 'George Russell' },
    { position: 7, driver: 'Charles Leclerc' },
    { position: 8, driver: 'Lance Stroll' },
    { position: 9, driver: 'Lando Norris' },
    { position: 10, driver: 'Esteban Ocon' },
    { position: 11, driver: 'Oscar Piastri' },
    { position: 12, driver: 'Pierre Gasly' },
    { position: 13, driver: 'Alexander Albon' },
    { position: 14, driver: 'Nico Hulkenberg' },
    { position: 15, driver: 'Valtteri Bottas' },
    { position: 16, driver: 'Zhou Guanyu' },
    { position: 17, driver: 'Yuki Tsunoda' },
    { position: 18, driver: 'Kevin Magnussen' },
    { position: 19, driver: 'Logan Sargeant' },
    { position: 20, driver: 'DANNY' },
  ];

  constructorFirstOrder: string[] = [];
  constructorSecondOrder: string[] = [];
  constructorDisplay: ConstructorOrder[] = [];
  currentGrandPrixTeams: ConstructorChamp[] = []; // {Name: string, Drivers: number[]}

  overallConstructorChamps: ConstructorChamp[] = [];

  ngOnInit() {
    this.createOrderDisplay();
    this.setcurrentGrandPrixTeams();

    //test
    this.raceResultsInput = this.raceResultsStr;
  }

  private setcurrentGrandPrixTeams() {
    this.constructorNames.forEach((x) => {
      this.currentGrandPrixTeams.push(
        new ConstructorChamp({ Name: x, Drivers: [] })
      );
    });
  }

  onGenerateConstructorOrder() {
    this.constructorDisplay = [];
    this.createOrderDisplay();

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

  listIndex: number = 0;

  onDriverSelection() {
    if (this.listIndex > 13) {
      return;
    }

    let driverList: number[] =
      this.listIndex < 7 ? this.topDrivers : this.secondDrivers;

    // takes random index of drivers and gets the drivers name
    const indexSelected = Math.floor(Math.random() * driverList.length);
    let driverLabel = this.f1DriversChampionship[driverList[indexSelected] - 1];

    this.constructorDisplay[this.listIndex].Position = driverLabel.position;

    if (driverLabel.position == 14) {
      this.constructorDisplay[this.listIndex].Driver = 'Best of the Rest!';
    } else {
      this.constructorDisplay[this.listIndex].Driver = driverLabel.driver;
    }

    let conIndex = this.currentGrandPrixTeams.findIndex(
      (x) => x.Name === this.constructorDisplay[this.listIndex].Name
    );
    this.currentGrandPrixTeams[conIndex].Drivers.push(driverLabel.driver);

    if (this.listIndex < 7) {
      this.topDrivers.splice(indexSelected, 1);
    } else {
      this.secondDrivers.splice(indexSelected, 1);
    }

    this.listIndex++;
  }

  private createOrderDisplay() {
    for (let i: number = 1; i < 15; i++) {
      this.constructorDisplay.push(new ConstructorOrder(i));
    }
  }

  currentGrandPrixTeamsJson: string = '';
  overallConstructorChampsJson: string = '';

  onGetcurrentGrandPrixTeamsJson() {
    this.currentGrandPrixTeamsJson = JSON.stringify(this.currentGrandPrixTeams);
  }

  onSetcurrentGrandPrixTeamsJson() {
    this.currentGrandPrixTeams = JSON.parse(this.currentGrandPrixTeamsJson);
  }

  raceResults: F1Result[] = [];
  raceResultsInput: string = '';

  onCalculateConstructors() {
    this.raceResults = this.parseF1Results(this.raceResultsInput);
    // this.overallConstructorChamps = this.hungaryChamp;
    this.overallConstructorChamps = this.currentGrandPrixTeams;

    this.overallConstructorChamps.forEach((team) => {
      team.Drivers.forEach((driver) => {
        let result = this.raceResults.find((x) => x.DRIVER === driver);
        team.TotalPoints += result ? result.PTS : 0;
      });
    });

    this.overallConstructorChamps.sort((a, b) => b.TotalPoints - a.TotalPoints);

    this.overallConstructorChamps.forEach((x) => {
      x.Drivers = [];
    });
    this.overallConstructorChampsJson = JSON.stringify(
      this.overallConstructorChamps
    );
  }

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

  driversChampJson: string = '';

  onSetDriversChampJson() {
    const input = this.driversChampJson;;
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

    let tmp: {position: number, driver: string}[] = [];
    drivers.forEach((x) => {
      tmp.push({ position: x.POS, driver: x.DRIVER });
    });

    this.f1DriversChampionship = tmp;
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
  DRIVER: string;
  NATIONALITY: string;
  CAR: string;
  PTS: number;
  [key: string]: string | number;
}