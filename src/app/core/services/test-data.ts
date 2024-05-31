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
            {NO: 1	,   DRIVER:     'Max Verstappen'    , CAR: 'RED BULL RACING HONDA RBPT' } as Formula1Driver,
            {NO: 11,    DRIVER: 	'Sergio Perez'  	, CAR: 'RED BULL RACING HONDA RBPT' } as Formula1Driver,
            {NO: 4	,   DRIVER:     'Lando Norris'	    , CAR: 'MCLAREN MERCEDES' } as Formula1Driver,
            {NO: 81,    DRIVER: 	'Oscar Piastri' 	, CAR: 'MCLAREN MERCEDES' } as Formula1Driver,
            {NO: 44,    DRIVER: 	'Lewis Hamilton'	, CAR: 'MERCEDES' } as Formula1Driver,
            {NO: 63,    DRIVER: 	'George Russell'	, CAR: 'MERCEDES' } as Formula1Driver,
            {NO: 16,    DRIVER: 	'Charles Leclerc'	, CAR: 'FERRARI' } as Formula1Driver,
            {NO: 55,    DRIVER: 	'Carlos Sainz'  	, CAR: 'FERRARI' } as Formula1Driver,
            {NO: 14,    DRIVER: 	'Fernando Alonso'	, CAR: 'ASTON MARTIN ARAMCO MERCEDES' } as Formula1Driver,
            {NO: 18,    DRIVER: 	'Lance Stroll'  	, CAR: 'ASTON MARTIN ARAMCO MERCEDES' } as Formula1Driver,
            {NO: 77,    DRIVER: 	'Valtteri Bottas'	, CAR: 'ALFA ROMEO FERRARI'	 } as Formula1Driver,
            {NO: 24,    DRIVER: 	'Zhou Guanyu'	    , CAR: 'ALFA ROMEO FERRARI' } as Formula1Driver,
            {NO: 27,    DRIVER: 	'Nico Hulkenberg'	, CAR: 'HAAS FERRARI' } as Formula1Driver,
            {NO: 20,    DRIVER: 	'Kevin Magnussen'	, CAR: 'HAAS FERRARI' } as Formula1Driver,
            {NO: 23,    DRIVER: 	'Alexander Albon'	, CAR: 'WILLIAMS MERCEDES' } as Formula1Driver,
            {NO: 2,     DRIVER:     'Logan Sargeant'    , CAR: 'WILLIAMS MERCEDES' } as Formula1Driver,
            {NO: 31,    DRIVER: 	'Esteban Ocon'	    , CAR: 'ALPINE RENAULT' } as Formula1Driver,
            {NO: 10,    DRIVER: 	'Pierre Gasly'	    , CAR: 'ALPINE RENAULT' } as Formula1Driver,
            {NO: 22,    DRIVER: 	'Yuki Tsunoda'  	, CAR: 'ALPHATAURI HONDA RBPT' } as Formula1Driver,
            {NO: 40,    DRIVER:     'Liam Lawson'	    , CAR: 'ALPHATAURI HONDA RBPT' } as Formula1Driver,
            // {NO: 3	,   DRIVER:     'Daniel Ricciardo'	, CAR: 'ALPHATAURI HONDA RBPT' } as Formula1Driver,
        ]
    }

    getConstructAfterBrazil() {
        return [
            { Name: 'Jimmer', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
            { Name: 'Joey', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
            { Name: 'Gabe', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
            { Name: 'Jake', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
            { Name: 'Nick', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
            { Name: 'Zac', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
            { Name: 'Kristin', TotalPoints: 0, Drivers: [], DriverNumbers: [] },
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