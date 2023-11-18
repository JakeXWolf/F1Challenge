import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConstructorChamp } from '../models/constructor-champ';
import { Formula1Driver } from '../models/f1-driver';

@Injectable({
  providedIn: 'root',
})
export class TestData {
  getCurrentChampStandings() {
    // THIS IS THE COMPETITION
    return this.getConstructAfterBrazil();
  }

  getCurrentDriversChampStr() {
    // THESE ARE THE DRIVERS
    return this.getDriversStrAfterBrazil();
  }

  getDrivers(): Formula1Driver[] {
    return [
      {
        NO: 1,
        DRIVER: 'Max Verstappen',
        CAR: 'RED BULL RACING HONDA RBPT',
      } as Formula1Driver,
      {
        NO: 11,
        DRIVER: 'Sergio Perez',
        CAR: 'RED BULL RACING HONDA RBPT',
      } as Formula1Driver,
      {
        NO: 4,
        DRIVER: 'Lando Norris',
        CAR: 'MCLAREN MERCEDES',
      } as Formula1Driver,
      {
        NO: 81,
        DRIVER: 'Oscar Piastri',
        CAR: 'MCLAREN MERCEDES',
      } as Formula1Driver,
      { NO: 44, DRIVER: 'Lewis Hamilton', CAR: 'MERCEDES' } as Formula1Driver,
      { NO: 63, DRIVER: 'George Russell', CAR: 'MERCEDES' } as Formula1Driver,
      { NO: 16, DRIVER: 'Charles Leclerc', CAR: 'FERRARI' } as Formula1Driver,
      { NO: 55, DRIVER: 'Carlos Sainz', CAR: 'FERRARI' } as Formula1Driver,
      {
        NO: 14,
        DRIVER: 'Fernando Alonso',
        CAR: 'ASTON MARTIN ARAMCO MERCEDES',
      } as Formula1Driver,
      {
        NO: 18,
        DRIVER: 'Lance Stroll',
        CAR: 'ASTON MARTIN ARAMCO MERCEDES',
      } as Formula1Driver,
      {
        NO: 77,
        DRIVER: 'Valtteri Bottas',
        CAR: 'ALFA ROMEO FERRARI',
      } as Formula1Driver,
      {
        NO: 24,
        DRIVER: 'Zhou Guanyu',
        CAR: 'ALFA ROMEO FERRARI',
      } as Formula1Driver,
      {
        NO: 27,
        DRIVER: 'Nico Hulkenberg',
        CAR: 'HAAS FERRARI',
      } as Formula1Driver,
      {
        NO: 20,
        DRIVER: 'Kevin Magnussen',
        CAR: 'HAAS FERRARI',
      } as Formula1Driver,
      {
        NO: 23,
        DRIVER: 'Alexander Albon',
        CAR: 'WILLIAMS MERCEDES',
      } as Formula1Driver,
      {
        NO: 2,
        DRIVER: 'Logan Sargeant',
        CAR: 'WILLIAMS MERCEDES',
      } as Formula1Driver,
      {
        NO: 31,
        DRIVER: 'Esteban Ocon',
        CAR: 'ALPINE RENAULT',
      } as Formula1Driver,
      {
        NO: 10,
        DRIVER: 'Pierre Gasly',
        CAR: 'ALPINE RENAULT',
      } as Formula1Driver,
      {
        NO: 22,
        DRIVER: 'Yuki Tsunoda',
        CAR: 'ALPHATAURI HONDA RBPT',
      } as Formula1Driver,
      // {
      //   NO: 40,
      //   DRIVER: 'Liam Lawson',
      //   CAR: 'ALPHATAURI HONDA RBPT',
      // } as Formula1Driver,
      {
        NO: 3,
        DRIVER: 'Daniel Ricciardo',
        CAR: 'ALPHATAURI HONDA RBPT',
      } as Formula1Driver,
    ];
  }

  getConstructAfterBrazil() {
    return [
      { Name: 'Jake', TotalPoints: 201, Drivers: [], DriverNumbers: [] },
      { Name: 'Kristin', TotalPoints: 198, Drivers: [], DriverNumbers: [] },
      { Name: 'Joey', TotalPoints: 179, Drivers: [], DriverNumbers: [] },
      { Name: 'Jimmer', TotalPoints: 161, Drivers: [], DriverNumbers: [] },
      { Name: 'Zac', TotalPoints: 139, Drivers: [], DriverNumbers: [] },
      { Name: 'Gabe', TotalPoints: 136, Drivers: [], DriverNumbers: [] },
      { Name: 'Nick', TotalPoints: 121, Drivers: [], DriverNumbers: [] },
    ];
  }

  getDriversStrAfterBrazil() {
    return `POS	DRIVER	NATIONALITY	CAR	PTS
1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	524
2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	258
3	Lewis Hamilton	GBR	MERCEDES	226
4	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	198
5	Lando Norris	GBR	MCLAREN MERCEDES	195
6	Carlos Sainz	ESP	FERRARI	192
7	Charles Leclerc	MON	FERRARI	170
8	George Russell	GBR	MERCEDES	156
9	Oscar Piastri	AUS	MCLAREN MERCEDES	87
10	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	63
11	Pierre Gasly	FRA	ALPINE RENAULT	62
12	Esteban Ocon	FRA	ALPINE RENAULT	46
13	Alexander Albon	THA	WILLIAMS MERCEDES	27
14	Yuki Tsunoda	JPN	ALPHATAURI HONDA RBPT	13
15	Valtteri Bottas	FIN	ALFA ROMEO FERRARI	10
16	Nico Hulkenberg	GER	HAAS FERRARI	9
17	Daniel Ricciardo	AUS	ALPHATAURI HONDA RBPT	6
18	Zhou Guanyu	CHN	ALFA ROMEO FERRARI	6
19	Kevin Magnussen	DEN	HAAS FERRARI	3
20	Liam Lawson	NZL	ALPHATAURI HONDA RBPT	2
21	Logan Sargeant	USA	WILLIAMS MERCEDES	1
22	Nyck De Vries	NED	ALPHATAURI HONDA RBPT	0`;
  }

  getConstructAfterMexico() {
    return [
      { Name: 'Kristin', TotalPoints: 189, Drivers: [], DriverNumbers: [] },
      { Name: 'Jake', TotalPoints: 186, Drivers: [], DriverNumbers: [] },
      { Name: 'Joey', TotalPoints: 148, Drivers: [], DriverNumbers: [] },
      { Name: 'Jimmer', TotalPoints: 147, Drivers: [], DriverNumbers: [] },
      { Name: 'Zac', TotalPoints: 129, Drivers: [], DriverNumbers: [] },
      { Name: 'Gabe', TotalPoints: 117, Drivers: [], DriverNumbers: [] },
      { Name: 'Nick', TotalPoints: 117, Drivers: [], DriverNumbers: [] },
    ];
  }

  getDriversStrAfterMexico() {
    return `POS	DRIVER	NATIONALITY	CAR	PTS
1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	499
2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	246
3	Lewis Hamilton	GBR	MERCEDES	222
4	Carlos Sainz	ESP	FERRARI	184
5	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	183
6	Lando Norris	GBR	MCLAREN MERCEDES	176
7	Charles Leclerc	MON	FERRARI	170
8	George Russell	GBR	MERCEDES	156
9	Oscar Piastri	AUS	MCLAREN MERCEDES	87
10	Pierre Gasly	FRA	ALPINE RENAULT	56
11	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	53
12	Esteban Ocon	FRA	ALPINE RENAULT	45
13	Alexander Albon	THA	WILLIAMS MERCEDES	27
14	Yuki Tsunoda	JPN	ALPHATAURI HONDA RBPT	11
15	Valtteri Bottas	FIN	ALFA ROMEO FERRARI	10
16	Nico Hulkenberg	GER	HAAS FERRARI	9
17	Daniel Ricciardo	AUS	ALPHATAURI HONDA RBPT	6
18	Zhou Guanyu	CHN	ALFA ROMEO FERRARI	6
19	Kevin Magnussen	DEN	HAAS FERRARI	3
20	Liam Lawson	NZL	ALPHATAURI HONDA RBPT	2
21	Logan Sargeant	USA	WILLIAMS MERCEDES	1
22	Nyck De Vries	NED	ALPHATAURI HONDA RBPT	0`;
  }

  getConstructAfterCota() {
    return [
      { Name: 'Kristin', TotalPoints: 171, Drivers: [], DriverNumbers: [] },
      { Name: 'Jake', TotalPoints: 170, Drivers: [], DriverNumbers: [] },
      { Name: 'Jimmer', TotalPoints: 147, Drivers: [], DriverNumbers: [] },
      { Name: 'Zac', TotalPoints: 128, Drivers: [], DriverNumbers: [] },
      { Name: 'Joey', TotalPoints: 127, Drivers: [], DriverNumbers: [] },
      { Name: 'Gabe', TotalPoints: 102, Drivers: [], DriverNumbers: [] },
      { Name: 'Nick', TotalPoints: 92, Drivers: [], DriverNumbers: [] },
    ];
  }

  getDriversStrAfterCota() {
    return `POS	DRIVER	NATIONALITY	CAR	PTS
1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	499
2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	246
3	Lewis Hamilton	GBR	MERCEDES	222
4	Carlos Sainz	ESP	FERRARI	184
5	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	183
6	Lando Norris	GBR	MCLAREN MERCEDES	176
7	Charles Leclerc	MON	FERRARI	170
8	George Russell	GBR	MERCEDES	156
9	Oscar Piastri	AUS	MCLAREN MERCEDES	87
10	Pierre Gasly	FRA	ALPINE RENAULT	56
11	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	53
12	Esteban Ocon	FRA	ALPINE RENAULT	45
13	Alexander Albon	THA	WILLIAMS MERCEDES	27
14	Yuki Tsunoda	JPN	ALPHATAURI HONDA RBPT	11
15	Valtteri Bottas	FIN	ALFA ROMEO FERRARI	10
16	Nico Hulkenberg	GER	HAAS FERRARI	9
17	Daniel Ricciardo	AUS	ALPHATAURI HONDA RBPT	6
18	Zhou Guanyu	CHN	ALFA ROMEO FERRARI	6
19	Kevin Magnussen	DEN	HAAS FERRARI	3
20	Logan Sargeant	USA	WILLIAMS MERCEDES	1`;
  }

  getConstructAfterQatar() {
    return [
      { Name: 'Jake', TotalPoints: 143, Drivers: [], DriverNumbers: [] },
      { Name: 'Kristin', TotalPoints: 143, Drivers: [], DriverNumbers: [] },
      { Name: 'Zac', TotalPoints: 128, Drivers: [], DriverNumbers: [] },
      { Name: 'Jimmer', TotalPoints: 108, Drivers: [], DriverNumbers: [] },
      { Name: 'Joey', TotalPoints: 104, Drivers: [], DriverNumbers: [] },
      { Name: 'Gabe', TotalPoints: 96, Drivers: [], DriverNumbers: [] },
      { Name: 'Nick', TotalPoints: 83, Drivers: [], DriverNumbers: [] },
    ];
  }

  getDriversStrAfterQatar() {
    return `POS	DRIVER	NATIONALITY	CAR	PTS
1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	433
2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	224
3	Lewis Hamilton	GBR	MERCEDES	194
4	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	183
5	Carlos Sainz	ESP	FERRARI	153
6	Charles Leclerc	MON	FERRARI	145
7	Lando Norris	GBR	MCLAREN MERCEDES	136
8	George Russell	GBR	MERCEDES	132
9	Oscar Piastri	AUS	MCLAREN MERCEDES	83
10	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	47
11	Pierre Gasly	FRA	ALPINE RENAULT	46
12	Esteban Ocon	FRA	ALPINE RENAULT	44
13	Alexander Albon	THA	WILLIAMS MERCEDES	23
14	Valtteri Bottas	FIN	ALFA ROMEO FERRARI	10
15	Nico Hulkenberg	GER	HAAS FERRARI	9
16	Zhou Guanyu	CHN	ALFA ROMEO FERRARI	6
17	Yuki Tsunoda	JPN	ALPHATAURI HONDA RBPT	3
18	Kevin Magnussen	DEN	HAAS FERRARI	3
19	Logan Sargeant	USA	WILLIAMS MERCEDES	0
20	Daniel Ricciardo	AUS	ALPHATAURI HONDA RBPT	0`;
  }

  getConstructAfterJapan() {
    return [
      {
        Name: 'Jake',
        TotalPoints: 122,
        Drivers: [],
        DriverNumbers: [],
      },
      {
        Name: 'Zac',
        TotalPoints: 107,
        Drivers: [],
        DriverNumbers: [],
      },
      {
        Name: 'Joey',
        TotalPoints: 103,
        Drivers: [],
        DriverNumbers: [],
      },
      {
        Name: 'Jimmer',
        TotalPoints: 98,
        Drivers: [],
        DriverNumbers: [],
      },
      {
        Name: 'Gabe',
        TotalPoints: 87,
        Drivers: [],
        DriverNumbers: [],
      },
      {
        Name: 'Kristin',
        TotalPoints: 84,
        Drivers: [],
        DriverNumbers: [],
      },
      {
        Name: 'Nick',
        TotalPoints: 72,
        Drivers: [],
        DriverNumbers: [],
      },
    ];
  }

  getDriversStrAfterJapan() {
    return `POS	DRIVER	NATIONALITY	CAR	PTS
1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	400
2	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	223
3	Lewis Hamilton	GBR	MERCEDES	190
4	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	174
5	Carlos Sainz	ESP	FERRARI	150
6	Charles Leclerc	MON	FERRARI	135
7	Lando Norris	GBR	MCLAREN MERCEDES	115
8	George Russell	GBR	MERCEDES	115
9	Oscar Piastri	AUS	MCLAREN MERCEDES	57
10	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	47
11	Pierre Gasly	FRA	ALPINE RENAULT	46
12	Esteban Ocon	FRA	ALPINE RENAULT	38
13	Alexander Albon	THA	WILLIAMS MERCEDES	21
14	Nico Hulkenberg	GER	HAAS FERRARI	9
15	Valtteri Bottas	FIN	ALFA ROMEO FERRARI	6
16	Zhou Guanyu	CHN	ALFA ROMEO FERRARI	4
17	Yuki Tsunoda	JPN	ALPHATAURI HONDA RBPT	3
18	Kevin Magnussen	DEN	HAAS FERRARI	3
19	Liam Lawson	NZL	ALPHATAURI HONDA RBPT	2
20	Logan Sargeant	USA	WILLIAMS MERCEDES	0`;
  }

  getConstructorAfterSingapor() {
    return [
      { Name: 'Jimmer', TotalPoints: 90, Drivers: [], DriverNumbers: [] },
      { Name: 'Joey', TotalPoints: 90, Drivers: [], DriverNumbers: [] },
      { Name: 'Gabe', TotalPoints: 81, Drivers: [], DriverNumbers: [] },
      { Name: 'Jake', TotalPoints: 78, Drivers: [], DriverNumbers: [] },
      { Name: 'Nick', TotalPoints: 72, Drivers: [], DriverNumbers: [] },
      { Name: 'Zac', TotalPoints: 71, Drivers: [], DriverNumbers: [] },
      { Name: 'Kristin', TotalPoints: 63, Drivers: [], DriverNumbers: [] },
    ];
  }

  // getHungaryConstructChamp() {
  //     return [
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Gabe',
  //         Drivers: ['Max Verstappen', 'Esteban Ocon'],
  //         }),
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Nick',
  //         Drivers: ['Fernando Alonso', 'Lando Norris'],
  //         }),
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Joey',
  //         Drivers: ['George Russell', 'Best of the Rest!'],
  //         }),
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Kristin',
  //         Drivers: ['Charles Leclerc', 'Lance Stroll'],
  //         }),
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Jake',
  //         Drivers: ['Carlos Sainz', 'Pierre Gasly'],
  //         }),
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Jimmer',
  //         Drivers: ['Lewis Hamilton', 'Alexander Albon'],
  //         }),
  //         new ConstructorChamp({
  //         TotalPoints: 0,
  //         Name: 'Zac',
  //         Drivers: ['Sergio Perez', 'Oscar Piastri'],
  //         }),
  //     ];
  // }

  resultsAfterQatarSprint = [
    {
      Name: 'Jake',
      TotalPoints: 128,
      Drivers: [
        {
          POS: 7,
          DRIVER: 'Lando Norris',
          NATIONALITY: 'GBR',
          CAR: 'MCLAREN MERCEDES',
          PTS: 115,
          NO: 4,
        },
        {
          POS: 10,
          DRIVER: 'Lance Stroll',
          NATIONALITY: 'CAN',
          CAR: 'ASTON MARTIN ARAMCO MERCEDES',
          PTS: 47,
          NO: 18,
        },
      ],
      DriverNumbers: [],
    },
    {
      Name: 'Zac',
      TotalPoints: 116,
      Drivers: [
        {
          POS: 3,
          DRIVER: 'Lewis Hamilton',
          NATIONALITY: 'GBR',
          CAR: 'MERCEDES',
          PTS: 190,
          NO: 44,
        },
        {
          POS: 8,
          DRIVER: 'George Russell',
          NATIONALITY: 'GBR',
          CAR: 'MERCEDES',
          PTS: 115,
          NO: 63,
        },
      ],
      DriverNumbers: [],
    },
    {
      Name: 'Joey',
      TotalPoints: 103,
      Drivers: [
        {
          POS: 2,
          DRIVER: 'Sergio Perez',
          NATIONALITY: 'MEX',
          CAR: 'RED BULL RACING HONDA RBPT',
          PTS: 223,
          NO: 11,
        },
        {
          POS: 14,
          DRIVER: 'Best Of The Rest!',
          NATIONALITY: 'GER',
          CAR: 'HAAS FERRARI',
          PTS: 9,
          NO: 27,
        },
      ],
      DriverNumbers: [],
    },
    {
      Name: 'Kristin',
      TotalPoints: 99,
      Drivers: [
        {
          POS: 1,
          DRIVER: 'Max Verstappen',
          NATIONALITY: 'NED',
          CAR: 'RED BULL RACING HONDA RBPT',
          PTS: 400,
          NO: 1,
        },
        {
          POS: 9,
          DRIVER: 'Oscar Piastri',
          NATIONALITY: 'AUS',
          CAR: 'MCLAREN MERCEDES',
          PTS: 57,
          NO: 81,
        },
      ],
      DriverNumbers: [],
    },
    {
      Name: 'Jimmer',
      TotalPoints: 98,
      Drivers: [
        {
          POS: 6,
          DRIVER: 'Charles Leclerc',
          NATIONALITY: 'MON',
          CAR: 'FERRARI',
          PTS: 135,
          NO: 16,
        },
        {
          POS: 11,
          DRIVER: 'Pierre Gasly',
          NATIONALITY: 'FRA',
          CAR: 'ALPINE RENAULT',
          PTS: 46,
          NO: 10,
        },
      ],
      DriverNumbers: [],
    },
    {
      Name: 'Gabe',
      TotalPoints: 90,
      Drivers: [
        {
          POS: 5,
          DRIVER: 'Carlos Sainz',
          NATIONALITY: 'ESP',
          CAR: 'FERRARI',
          PTS: 150,
          NO: 55,
        },
        {
          POS: 12,
          DRIVER: 'Esteban Ocon',
          NATIONALITY: 'FRA',
          CAR: 'ALPINE RENAULT',
          PTS: 38,
          NO: 31,
        },
      ],
      DriverNumbers: [],
    },
    {
      Name: 'Nick',
      TotalPoints: 75,
      Drivers: [
        {
          POS: 4,
          DRIVER: 'Fernando Alonso',
          NATIONALITY: 'ESP',
          CAR: 'ASTON MARTIN ARAMCO MERCEDES',
          PTS: 174,
          NO: 14,
        },
        {
          POS: 13,
          DRIVER: 'Alexander Albon',
          NATIONALITY: 'THA',
          CAR: 'WILLIAMS MERCEDES',
          PTS: 21,
          NO: 23,
        },
      ],
      DriverNumbers: [],
    },
  ];
}