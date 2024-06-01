import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConstructorChamp } from '../models/constructor-champ';
import { Formula1Driver } from '../models/f1-driver';

@Injectable({
  providedIn: 'root',
  providedIn: 'root',
})
export class TestData {

    getCurrentChampStandings() {
        // THIS IS THE COMPETITION
        return this.getConstructBlank();
    }

    getCurrentDriversChampStr() {
        // THESE ARE THE DRIVERS
        return this.getDriversStandingsAfterMonaco();
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

    private getConstructBlank() {
        return [
          {
            Name: 'Jake',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
          {
            Name: 'Zac',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
          {
            Name: 'Joey',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
          {
            Name: 'Jimmer',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
          {
            Name: 'Gabe',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
          {
            Name: 'Kristin',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
          {
            Name: 'Nick',
            TotalPoints: 0,
            Drivers: [],
            DriverNumbers: [],
          },
        ];
    }

    getDriversStandingsAfterMonaco(): string {
        return `POS	DRIVER	NATIONALITY	CAR	PTS
        1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	169
        2	Charles Leclerc	MON	FERRARI	138
        3	Lando Norris	GBR	MCLAREN MERCEDES	113
        4	Carlos Sainz	ESP	FERRARI	108
        5	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	107
        6	Oscar Piastri	AUS	MCLAREN MERCEDES	71
        7	George Russell	GBR	MERCEDES	54
        8	Lewis Hamilton	GBR	MERCEDES	42
        9	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	33
        10	Yuki Tsunoda	JPN	RB HONDA RBPT	19
        11	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	11
        12	Oliver Bearman	GBR	FERRARI	6
        13	Nico Hulkenberg	GER	HAAS FERRARI	6
        14	Daniel Ricciardo	AUS	RB HONDA RBPT	5
        15	Alexander Albon	THA	WILLIAMS MERCEDES	2
        16	Esteban Ocon	FRA	ALPINE RENAULT	1
        17	Kevin Magnussen	DEN	HAAS FERRARI	1
        18	Pierre Gasly	FRA	ALPINE RENAULT	1
        19	Zhou Guanyu	CHN	KICK SAUBER FERRARI	0
        20	Valtteri Bottas	FIN	KICK SAUBER FERRARI	0
        21	Logan Sargeant	USA	WILLIAMS MERCEDES	0`;
    }
}