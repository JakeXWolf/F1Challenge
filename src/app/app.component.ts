import { Component, OnInit } from '@angular/core';

import { ConstructorChamp } from './core/models/constructor-champ';
import { ConstructorOrder } from './core/models/constructor-order';
import { F1Result } from './core/models/f1-results';
import { Formula1Driver } from './core/models/f1-driver';

import { TestData } from './core/services/test-data';
import { DataService } from './core/services/data-service';

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

  //TODO: TEST
  cols = [
    { field: 'POS', header: 'Place' },
    { field: 'DRIVER', header: 'Name' }
  ];

  constructor(public testData: TestData, private dataService: DataService) {}


  ngOnInit() {
    // added for doc stuff
    this.dataService.fetchDocumentContent().subscribe(data => {
      console.log(data);
    });


    this.createOrderDisplay();
    this.setConstructorTeams();

    this.driverList = this.testData.getDrivers();

    //test
    this.raceResultsInput = this.raceResultsStr;
    this.setConstructor();
    // this.setDriversChampJson();
    this.driversChampJson = this.testData.getCurrentDriversChampStr();
    this.onSetDriversChampJson();
    // this.setDriversChampJson();
    // this.driversChampJson = this.testData.getCurrentDriversChampStr();
    // this.onSetDriversChampJson();


    this.dataService.getConstructorBeforeWeekend().subscribe(data => {
      this.constructorTeams = data;
      if (this.f1DriversChampionship != null && this.f1DriversChampionship.length > 0) {
        this.setDriversChampOrderByConstructor();
      }
      console.log(data)
    });
  }

  // fetchDocumentContent() {
  //   const docId = '1GKAOen0a25cxv51M_LUHX5bZcE-bgE4U5yyRP_5u7BE';
  //   const test = `https://docs.google.com/document/d/1GKAOen0a25cxv51M_LUHX5bZcE-bgE4U5yyRP_5u7BE/edit?usp=sharing`
  //   const url = `https://docs.google.com/document/d/${docId}/export?format=txt`;

  //   this.http.get(url, { responseType: 'text' }).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

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

  onDriversRowReorderAlgorithm(item: any) {
    // if theres no change then no action is needed
    if (item.dragIndex === item.dropIndex) {
      return;
    }

    // default is item moving from better to worse (lower index to higher index)
    let start: number = item.dragIndex;
    let end: number = item.dropIndex;

    let shiftDirection: number = 1;

    // set the shifted row's value
    this.f1DriversChampionship[item.dropIndex].POS = item.dropIndex + 1;

    // if item is moving from worse to better (higher index to lower index)
    if (item.dragIndex > item.dropIndex) {
      shiftDirection = -1;
      start = item.dropIndex + 1;
      end = item.dragIndex;
    }

    // shift all values between the reordered range
    for (let i: number = start; i < end; i++) {
      this.f1DriversChampionship[i].POS += shiftDirection;
    }

    // this.f1DriversChampionship.sort((a,b) => a.POS - b.POS);
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
  // onSetDriversChampJson() {
  //   const input = this.driversChampJson;
  //   const lines = input.trim().split('\n');
  //   const headers = lines[0].split('\t');
  //   const data = lines.slice(1).map((line) => line.split('\t'));

  //   let drivers = data.map((row) => {
  //     const driver: Formula1Driver = {} as Formula1Driver;
  //     headers.forEach((header, index) => {
  //       const value = row[index];
  //       if (header === 'POS' || header === 'PTS') {
  //         driver[header] = parseInt(value, 10);
  //       } else {
  //         driver[header] = value;
  //       }
  //     });
  //     return driver;
  //   });

  //   this.removeNonActiveDrivers(drivers);

  //   drivers.forEach((x) => {
  //     x.NO = this.driverList.find((d) => d.DRIVER === x.DRIVER)?.NO as number;
  //   });

  //   this.f1DriversChampionship = drivers;
  // }
  onSetDriversChampJson() {
    const input = this.driversChampJson;
    const lines = input.trim().split('\n\n');
    const headers = lines.slice(0, 5).map(h => h.trim());
    const data = lines.slice(5);

    let drivers = [];
    for (let i = 0; i < data.length; i += 5) {
        const driver: Formula1Driver = {} as Formula1Driver;

        driver['POS'] = parseInt(data[i].trim(), 10);
        driver['DRIVER'] = data[i + 1].trim();
        driver['NATIONALITY'] = data[i + 2].trim();
        driver['CAR'] = data[i + 3].trim();
        driver['PTS'] = parseInt(data[i + 4].trim(), 10);

        drivers.push(driver);
    }

    this.removeNonActiveDrivers(drivers);

    drivers.forEach((x) => {
        x.NO = this.driverList.find((d) => d.DRIVER === x.DRIVER)?.NO as number;
    });

    this.f1DriversChampionship = drivers;
  }



  removeNonActiveDrivers(drivers: Formula1Driver[]) {
    let posCorrection: number = 0;
    let nonActiveDrivers: string[] = ['Oliver Bearman'];

    for (let i: number = 0; i < drivers.length; i++) {
      if (nonActiveDrivers.includes(drivers[i].DRIVER)) {
        // if the nonActive driver exists, remove them and set back the index since the driver is now removed
        drivers.splice(i, 1);
        i--;
        posCorrection += 1;
      } else {
        //
        drivers[i].POS -= posCorrection;
      }
    }
  }

  // Grand Prix Team Json
  onGetConstructorTeamsJson() {
    this.constructorTeamsJson = JSON.stringify(this.constructorTeams);
  }

  onSetConstructorTeamsJson() {
    this.constructorTeams = JSON.parse(this.constructorTeamsJson);
    if (this.f1DriversChampionship != null && this.f1DriversChampionship.length > 0) {
      this.setDriversChampOrderByConstructor();
    }
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
  // check to see if theres previous race set up. if so use that data to setup the grid
  onPostRaceWeekend() {
    this.isOpeningPage = false;
    this.isPostRaceWeekend = true;

    this.dataService.getConstructorBeforeWeekend().subscribe(data => {
      this.constructorTeams = data;
      // if (this.f1DriversChampionship != null && this.f1DriversChampionship.length > 0) {
      if (this.constructorTeams && this.constructorTeams.length && this.constructorTeams[0].Drivers.length) {
        this.setDriversChampOrderByConstructor();
      } else {
        this.setUpDriversListDropDown();
      }
      console.log(data)
    });
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

  onTestPrintConstructorTeamsJson() {
    this.onGetConstructorTeamsJson();
    console.log(this.constructorTeams);
  }

  // triggered when going from home page to postrace page for setting up constructors
  setUpDriversListDropDown() {
    if (!this.f1DriversChampionship.length && this.f1DriversChampionship.length === 0) {
      this.onSetDriversChampJson();
    }
    this.f1DriversOptions = this.f1DriversChampionship.slice(0,14)
    this.f1DriversOptions[13].DRIVER = 'Best Of The Rest!';
  }

  // used in postrace on constructor json set
  setDriversChampOrderByConstructor() {
    let driverChampOrder: Formula1Driver[] = [];

    this.constructorTeams.forEach(x => {
      x.Drivers.forEach(d => {
        driverChampOrder.push(d);
      });
    });

    driverChampOrder.sort((a,b) => a.POS - b.POS);
    this.f1DriversOptions = driverChampOrder;
  }

  // TODO: dont think this is used anywhere
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
  // this method was retired 9/1 due to formatting changes
  // parseF1Results(resultsString: string): F1Result[] {
  //   const rows = resultsString.trim().split('\n');
  //   const header = rows[0].split('\t');
  //   const f1Results: F1Result[] = [];

  //   for (let i = 1; i < rows.length; i++) {
  //     const columns = rows[i].split('\t');
  //     const f1Result: F1Result = {} as F1Result;

  //     for (let j = 0; j < header.length; j++) {
  //       const columnName = header[j];
  //       const columnValue = columns[j];

  //       if (
  //         columnName === 'NO' ||
  //         columnName === 'LAPS' ||
  //         columnName === 'PTS'
  //       ) {
  //         f1Result[columnName] = parseInt(columnValue, 10);
  //       } else {
  //         f1Result[columnName] = columnValue;
  //       }
  //     }

  //     f1Results.push(f1Result);
  //   }

  //   return f1Results;
  // }

  // Parse Race Results
  // method written by Chat GPT
  parseF1Results(resultsString: string): F1Result[] {
    const rows = resultsString.trim().split('\n\n');
    const header = rows.slice(0, 7).map(h => h.trim());
    const f1Results: F1Result[] = [];

    for (let i = 7; i < rows.length; i += 6) {
        const f1Result: F1Result = {} as F1Result;

        f1Result['POS'] = rows[i].trim();
        f1Result['NO'] = parseInt(rows[i + 1].trim(), 10);
        const [driver, car] = rows[i + 2].split('\t\n');
        f1Result['DRIVER'] = driver.trim();
        f1Result['CAR'] = car.trim();
        f1Result['LAPS'] = parseInt(rows[i + 3].trim(), 10);
        f1Result['TIME/RETIRED'] = rows[i + 4].trim();
        f1Result['PTS'] = parseInt(rows[i + 5].trim(), 10);

        f1Results.push(f1Result);
    }

    return f1Results;
  }





  onCalculateConstructors() {
    this.raceResults = this.parseF1Results(this.raceResultsInput);
    var isSprint: boolean = (this.raceResults[0].PTS < 10);

    this.constructorTeams.forEach((team) => {
      team.Drivers.forEach((driver) => {
        let result = this.raceResults.find((x) => x.NO === driver.NO);
        team.TotalPoints += result ? this.getAlterPoints(result, isSprint) : 0;
      });
    });

    this.constructorTeams.sort((a, b) => b.TotalPoints - a.TotalPoints);

    // if the race is a sprint, do not clear out the drivers for each constructor
    if (!isSprint) {
      this.constructorTeams.forEach((x) => {
        x.Drivers = [];
        x.DriverNumbers = [];
        x.DriverNumbers = [];
      });
    }

    this.constructorTeamsJson = JSON.stringify(this.constructorTeams);
    this.isPostRaceResultsEntered = true;
  }

  getAlterPoints(driverResult: F1Result, isSprint: boolean): number {
    var subtractVal: number = 0;

    if (isSprint) {
      return driverResult.PTS;
    }

    switch (driverResult.POS) {
      case '1':
        // NO MORE MAX DOMINANCE
        // if (driverResult.CAR === 'RED BULL RACING HONDA RBPT') {
           subtractVal = 15;
        // } 
        // else { // get 3 extra points if non rb wins
        //  subtractVal = 12;
        // }
        break;
      case '2':
        subtractVal = 9;
        break;
      case '3':
        subtractVal = 7;
        break;
      case '4':
        subtractVal = 5;
        break;
      case '5':
        subtractVal = 4;
        break;
      case '6':
        subtractVal = 3;
        break;
      case '7':
        subtractVal = 2;
        break;
      case '8':
        subtractVal = 1;
        break;
      default:
        subtractVal = 0;
        break;
    }

    return driverResult.PTS - subtractVal;
  }



  ////////////////////////////////////////////////   'autofilled' data   /////////////////////////////////////////////////////

  private setConstructor() {
    this.constructorTeams = this.testData.getCurrentChampStandings();
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
  raceResultsStr: string = `POS\n\nDRIVER\n\nNATIONALITY\n\nCAR\n\nPTS\n\n1\n\nMax Verstappen\n\nNED\n\nRed Bull Racing Honda RBPT\n\n295\n\n2\n\nLando Norris\n\nGBR\n\nMcLaren Mercedes\n\n225\n\n3\n\nCharles Leclerc\n\nMON\n\nFerrari\n\n192\n\n4\n\nOscar Piastri\n\nAUS\n\nMcLaren Mercedes\n\n179\n\n5\n\nCarlos Sainz\n\nESP\n\nFerrari\n\n172\n\n6\n\nLewis Hamilton\n\nGBR\n\nMercedes\n\n154\n\n7\n\nSergio Perez\n\nMEX\n\nRed Bull Racing Honda RBPT\n\n139\n\n8\n\nGeorge Russell\n\nGBR\n\nMercedes\n\n122\n\n9\n\nFernando Alonso\n\nESP\n\nAston Martin Aramco Mercedes\n\n50\n\n10\n\nLance Stroll\n\nCAN\n\nAston Martin Aramco Mercedes\n\n24\n\n11\n\nNico Hulkenberg\n\nGER\n\nHaas Ferrari\n\n22\n\n12\n\nYuki Tsunoda\n\nJPN\n\nRB Honda RBPT\n\n22\n\n13\n\nDaniel Ricciardo\n\nAUS\n\nRB Honda RBPT\n\n12\n\n14\n\nPierre Gasly\n\nFRA\n\nAlpine Renault\n\n8\n\n15\n\nOliver Bearman\n\nGBR\n\nFerrari\n\n6\n\n16\n\nKevin Magnussen\n\nDEN\n\nHaas Ferrari\n\n5\n\n17\n\nEsteban Ocon\n\nFRA\n\nAlpine Renault\n\n5\n\n18\n\nAlexander Albon\n\nTHA\n\nWilliams Mercedes\n\n4\n\n19\n\nZhou Guanyu\n\nCHN\n\nKick Sauber Ferrari\n\n0\n\n20\n\nLogan Sargeant\n\nUSA\n\nWilliams Mercedes\n\n0\n\n21\n\nValtteri Bottas\n\nFIN\n\nKick Sauber Ferrari\n\n0`;

//   setDriversChampJson() {
//     this.driversChampJson = `
//     POS	DRIVER	NATIONALITY	CAR	PTS
// 1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	110
// 2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	85
// 3	Charles Leclerc	MON	FERRARI	76
// 4	Carlos Sainz	ESP	FERRARI	69
// 5	Lando Norris	GBR	MCLAREN MERCEDES	58
// 6	Oscar Piastri	AUS	MCLAREN MERCEDES	38
// 7	George Russell	GBR	MERCEDES	33
// 8	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	31
// 9	Lewis Hamilton	GBR	MERCEDES	19
// 10	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	9
// 11	Yuki Tsunoda	JPN	RB HONDA RBPT	7
// 12	Nico Hulkenberg	GER	HAAS FERRARI	4
// 13	Kevin Magnussen	DEN	HAAS FERRARI	1
// 14	Alexander Albon	THA	WILLIAMS MERCEDES	0
// 15	Esteban Ocon	FRA	ALPINE RENAULT	0
// 16	Zhou Guanyu	CHN	KICK SAUBER FERRARI	0
// 17	Daniel Ricciardo	AUS	RB HONDA RBPT	0
// 18	Pierre Gasly	FRA	ALPINE RENAULT	0
// 19	Valtteri Bottas	FIN	KICK SAUBER FERRARI	0
// 20	Logan Sargeant	USA	WILLIAMS MERCEDES	0
//     `;
//   }

  // const parsedResults = this.parseF1Results(resultsString);
  // console.log(parsedResults);
}

// [{"Name":"Jimmer","TotalPoints":0,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":40,"NO":55},{"POS":8,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":16,"NO":14}],"DriverNumbers":[55,14]},
// {"Name":"Joey","TotalPoints":0,"Drivers":[{"POS":3,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":46,"NO":11},{"POS":15,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"WILLIAMS MERCEDES","PTS":0,"NO":23}],"DriverNumbers":[11,23]},
// {"Name":"Gabe","TotalPoints":0,"Drivers":[{"POS":6,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":27,"NO":4},{"POS":10,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":8,"NO":44}],"DriverNumbers":[4,44]},
// {"Name":"Jake","TotalPoints":0,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":51,"NO":1},{"POS":13,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":3,"NO":27}],"DriverNumbers":[1,27]},
// {"Name":"Nick","TotalPoints":0,"Drivers":[{"POS":2,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":47,"NO":16},{"POS":11,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":6,"NO":22}],"DriverNumbers":[16,22]},
// {"Name":"Zac","TotalPoints":0,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":18,"NO":63},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"DEN","CAR":"HAAS FERRARI","PTS":1,"NO":20}],"DriverNumbers":[63,23,24,null,31,10,77,2]},
// {"Name":"Kristin","TotalPoints":0,"Drivers":[{"POS":5,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":28,"NO":81},{"POS":9,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":9,"NO":18}],"DriverNumbers":[81,18]}]


