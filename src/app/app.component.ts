import { Component, OnInit } from '@angular/core';

class ConstructorChamp {
  Name: string = '';
  TotalPoints: number = 0;
  Drivers: string[] = [];

  public constructor(init?: Partial<Column>) {
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
  constructorDisplay: string[] = [];
  constructorTeams = {}; // {Name: string, Drivers: number[]}

  ngOnInit() {
    this.createOrderDisplay();
  }

  onGenerateConstructorOrder() {
    this.constructorDisplay = [];
    this.createOrderDisplay();

    while (this.constructorNames.length) {
      const indexSelected = Math.floor(
        Math.random() * this.constructorNames.length
      );
      console.log(indexSelected, this.constructorNames[indexSelected]);

      this.constructorFirstOrder.push(this.constructorNames[indexSelected]);
      this.constructorSecondOrder.push(this.constructorNames[indexSelected]);

      this.constructorDisplay[7 - this.constructorNames.length] +=
        this.constructorNames[indexSelected];
      this.constructorDisplay[6 + this.constructorNames.length] +=
        this.constructorNames[indexSelected];

      this.constructorNames.splice(indexSelected, 1);
    }
  }

  listIndex: number = 0;

  onDriverSelection() {
    let driverList: number[] =
      this.listIndex < 7 ? this.topDrivers : this.secondDrivers;

    // const indexSelected = Math.floor(Math.random() * months.length);
    // console.log(random, months[random]);

    const indexSelected = Math.floor(Math.random() * driverList.length);

    let driverLabel = this.f1DriversChampionship[driverList[indexSelected] - 1];

    if (driverLabel.position == 14) {
      this.constructorDisplay[this.listIndex] += ' - Best of the Rest!';
    } else {
      this.constructorDisplay[this.listIndex] +=
        ' - ' + driverLabel.position + ' - ' + driverLabel.driver;
    }

    // TODO: add to teams

    if (this.listIndex < 7) {
      this.topDrivers.splice(indexSelected, 1);
    } else {
      this.secondDrivers.splice(indexSelected, 1);
    }

    this.listIndex++;
  }

  private createOrderDisplay() {
    for (let i: number = 1; i < 15; i++) {
      this.constructorDisplay.push(i + ': ');
    }
  }
}
