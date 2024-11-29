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
        return this.getResultsAfterAustria();
    }

    getCurrentDriversChampStr() {
        // THESE ARE THE DRIVERS
        return this.getDriverStandingsAfterAustria();
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
            // {NO: 2,     DRIVER:    'Logan Sargeant'    , CAR: 'WILLIAMS MERCEDES' } as Formula1Driver,
            {NO: 43,     DRIVER:    'Franco Colapinto'    , CAR: 'WILLIAMS MERCEDES' } as Formula1Driver,
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

    getResultsBeforeBritian() {
        return [{"Name":"Joey","TotalPoints":86,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":112,"NO":81},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":17,"NO":18}],"DriverNumbers":[81,18]},{"Name":"Jimmer","TotalPoints":72,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":135,"NO":55},{"POS":12,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":14,"NO":27}],"DriverNumbers":[55,27]},{"Name":"Kristin","TotalPoints":67,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":156,"NO":4},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[4,22]},{"Name":"Zac","TotalPoints":65,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":237,"NO":1},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":41,"NO":14}],"DriverNumbers":[1,14]},{"Name":"Gabe","TotalPoints":58,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":118,"NO":11},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":85,"NO":44}],"DriverNumbers":[11,44]},{"Name":"Nick","TotalPoints":55,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":150,"NO":16},{"POS":13,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":11}],"DriverNumbers":[16,null]},{"Name":"Jake","TotalPoints":52,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":111,"NO":63},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":6,"NO":10}],"DriverNumbers":[63,10,20,31,23,24,77,2]}];
    }

    getResultsAfterAustria() {
        return [{"Name":"Joey","TotalPoints":86,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":72,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":67,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":65,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":58,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":55,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":52,"Drivers":[],"DriverNumbers":[]}];
    }

    getResultsAfterMiami() {
        return [{"Name":"Joey","TotalPoints":33,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":23,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":22,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":21,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":18,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":17,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":15,"Drivers":[],"DriverNumbers":[]}]
    }

    getResultsAfterImola() {
        return [{"Name":"Joey","TotalPoints":39,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":33,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":31,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":27,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":26,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":25,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":24,"Drivers":[],"DriverNumbers":[]}];
    }

    getDriverStandingsAfterAustria(): string {
        return `POS	DRIVER	NATIONALITY	CAR	PTS
        1	Max Verstappen	NED	RED BULL RACING HONDA RBPT	237
        2	Lando Norris	GBR	MCLAREN MERCEDES	156
        3	Charles Leclerc	MON	FERRARI	150
        4	Carlos Sainz	ESP	FERRARI	135
        5	Sergio Perez	MEX	RED BULL RACING HONDA RBPT	118
        6	Oscar Piastri	AUS	MCLAREN MERCEDES	112
        7	George Russell	GBR	MERCEDES	111
        8	Lewis Hamilton	GBR	MERCEDES	85
        9	Fernando Alonso	ESP	ASTON MARTIN ARAMCO MERCEDES	41
        10	Yuki Tsunoda	JPN	RB HONDA RBPT	19
        11	Lance Stroll	CAN	ASTON MARTIN ARAMCO MERCEDES	17
        12	Nico Hulkenberg	GER	HAAS FERRARI	14
        13	Daniel Ricciardo	AUS	RB HONDA RBPT	11
        14	Oliver Bearman	GBR	FERRARI	6
        15	Pierre Gasly	FRA	ALPINE RENAULT	6
        16	Kevin Magnussen	DEN	HAAS FERRARI	5
        17	Esteban Ocon	FRA	ALPINE RENAULT	3
        18	Alexander Albon	THA	WILLIAMS MERCEDES	2
        19	Zhou Guanyu	CHN	KICK SAUBER FERRARI	0
        20	Valtteri Bottas	FIN	KICK SAUBER FERRARI	0
        21	Logan Sargeant	USA	WILLIAMS MERCEDES	0`;
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

/*



scoring after Japan:
[{"Name":"Jimmer","TotalPoints":13,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":11,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":9,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":8,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":8,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":4,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":3,"Drivers":[],"DriverNumbers":[]}]

lineup for China
[{"Name":"Jake","TotalPoints":11,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":71,"NO":81},{"POS":12,"DRIVER":"Best Of The Rest!","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":5}],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":4,"Drivers":[{"POS":12,"DRIVER":"Kevin Magnussen","NATIONALITY":"DEN","CAR":"HAAS FERRARI","PTS":1,"NO":20},{"POS":2,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":107,"NO":11}],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":9,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":113,"NO":4},{"POS":9,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":42,"NO":44}],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":13,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":54,"NO":63},{"POS":11,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":8,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":169,"NO":1},{"POS":11,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":3,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":108,"NO":55},{"POS":12,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":11,"NO":18}],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":8,"Drivers":[{"POS":1,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":138,"NO":16},{"POS":10,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":33,"NO":14}],"DriverNumbers":[]}]

scoring after China Sprint:
[{"Name":"Joey","TotalPoints":19,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":113,"NO":4},{"POS":9,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":42,"NO":44}],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":16,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":169,"NO":1},{"POS":11,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":14,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":54,"NO":63},{"POS":11,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":13,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":71,"NO":81},{"POS":12,"DRIVER":"Best Of The Rest!","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":5}],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":13,"Drivers":[{"POS":1,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":138,"NO":16},{"POS":10,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":33,"NO":14}],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":10,"Drivers":[{"POS":12,"DRIVER":"Kevin Magnussen","NATIONALITY":"DEN","CAR":"HAAS FERRARI","PTS":1,"NO":20},{"POS":2,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":107,"NO":11}],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":7,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":108,"NO":55},{"POS":12,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":11,"NO":18}],"DriverNumbers":[]}]

scoring after China GP:
[{"Name":"Joey","TotalPoints":30,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":27,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":25,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":19,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":18,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":16,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":13,"Drivers":[],"DriverNumbers":[]}]


Miami Before:
[{"Name":"Jake","TotalPoints":13,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":33,"NO":63},{"POS":8,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":31,"NO":14}],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":10,"Drivers":[{"POS":5,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":58,"NO":4},{"POS":10,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":9,"NO":18}],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":19,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":110,"NO":1},{"POS":9,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":19,"NO":44}],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":14,"Drivers":[{"POS":2,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":85,"NO":11},{"POS":14,"DRIVER":"Best Of The Rest!","NATIONALITY":"THA","CAR":"WILLIAMS MERCEDES","PTS":0,"NO":23}],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":16,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":69,"NO":55},{"POS":13,"DRIVER":"Kevin Magnussen","NATIONALITY":"DEN","CAR":"HAAS FERRARI","PTS":1,"NO":20}],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":7,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":76,"NO":16},{"POS":12,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":4,"NO":27}],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":13,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":38,"NO":81},{"POS":11,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":7,"NO":22}],"DriverNumbers":[]}]

Miami After:
[{"Name":"Joey","TotalPoints":33,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":23,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":22,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":21,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":18,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":17,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":15,"Drivers":[],"DriverNumbers":[]}]


Imola Before:
[{"Name":"Jimmer","TotalPoints":21,"Drivers":[{"POS":4,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":83,"NO":4},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":14,"NO":22}],"DriverNumbers":[4,22]},{"Name":"Joey","TotalPoints":33,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":83,"NO":55},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":1,"NO":31}],"DriverNumbers":[55,31,20,23,24,10,77,2]},{"Name":"Gabe","TotalPoints":22,"Drivers":[{"POS":2,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":103,"NO":11},{"POS":12,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[11,27]},{"Name":"Jake","TotalPoints":18,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":98,"NO":16},{"POS":8,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":33,"NO":14}],"DriverNumbers":[16,14]},{"Name":"Nick","TotalPoints":17,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":37,"NO":63},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":9,"NO":18}],"DriverNumbers":[63,18]},{"Name":"Zac","TotalPoints":23,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":136,"NO":1},{"POS":13,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":5}],"DriverNumbers":[1,null]},{"Name":"Kristin","TotalPoints":15,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":41,"NO":81},{"POS":9,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":27,"NO":44}],"DriverNumbers":[81,44]}]

Imola After:
[{"Name":"Joey","TotalPoints":39,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":33,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":31,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":27,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":26,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":25,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":24,"Drivers":[],"DriverNumbers":[]}]

Monaco Before:
[{"Name":"Joey","TotalPoints":39,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":83,"NO":55},{"POS":14,"DRIVER":"Best Of The Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":1,"NO":31}],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":33,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":37,"NO":63},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":27,"NO":44}],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":31,"Drivers":[{"POS":2,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":98,"NO":16},{"POS":12,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":27,"Drivers":[{"POS":4,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":83,"NO":4},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":14,"NO":22}],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":26,"Drivers":[{"POS":2,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":103,"NO":11},{"POS":13,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":5}],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":25,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":41,"NO":81},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":9,"NO":18}],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":24,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":136,"NO":1},{"POS":8,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":33,"NO":14}],"DriverNumbers":[]}]

Monaco After:
[{"Name":"Joey","TotalPoints":47,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":44,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":44,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":37,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":34,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":29,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":26,"Drivers":[],"DriverNumbers":[]}]


Canada Before:
[{"Name":"Jake","TotalPoints":26,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":107,"NO":11},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":42,"NO":44}],"DriverNumbers":[11,44]},{"Name":"Zac","TotalPoints":44,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":71,"NO":81},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[81,22]},{"Name":"Joey","TotalPoints":47,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":54,"NO":63},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":33,"NO":14}],"DriverNumbers":[63,14]},{"Name":"Jimmer","TotalPoints":44,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":108,"NO":55},{"POS":13,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":5}],"DriverNumbers":[55,null]},{"Name":"Gabe","TotalPoints":34,"Drivers":[{"POS":2,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":138,"NO":16},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":11,"NO":18}],"DriverNumbers":[16,18]},{"Name":"Kristin","TotalPoints":37,"Drivers":[{"POS":3,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":113,"NO":4},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"THA","CAR":"WILLIAMS MERCEDES","PTS":2,"NO":23}],"DriverNumbers":[4,23,31,20,10,24,77,2]},{"Name":"Nick","TotalPoints":29,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":169,"NO":1},{"POS":12,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[1,27]}]

Canada After:
[{"Name":"Joey","TotalPoints":60,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":50,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":46,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":44,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":39,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":38,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":34,"Drivers":[],"DriverNumbers":[]}]


Spain Before:
[{"Name":"Jake","TotalPoints":34,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":69,"NO":63},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":17,"NO":18}],"DriverNumbers":[63,18]},{"Name":"Zac","TotalPoints":50,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":108,"NO":55},{"POS":12,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":9}],"DriverNumbers":[55,null]},{"Name":"Joey","TotalPoints":60,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":194,"NO":1},{"POS":13,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[1,27]},{"Name":"Jimmer","TotalPoints":44,"Drivers":[{"POS":3,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":131,"NO":4},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":3,"NO":10}],"DriverNumbers":[4,10,23,31,20,24,77,2]},{"Name":"Gabe","TotalPoints":38,"Drivers":[{"POS":2,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":138,"NO":16},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[16,22]},{"Name":"Kristin","TotalPoints":46,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":107,"NO":11},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":55,"NO":44}],"DriverNumbers":[11,44]},{"Name":"Nick","TotalPoints":39,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":81,"NO":81},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":41,"NO":14}],"DriverNumbers":[81,14]}]

Spain After:
[{"Name":"Joey","TotalPoints":70,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":57,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":56,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":55,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":44,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":43,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":41,"Drivers":[],"DriverNumbers":[]}]

Austria Sprint Before:
[{"Name":"Joey","TotalPoints":70,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":219,"NO":1},{"POS":13,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":57,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":150,"NO":4},{"POS":12,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":9}],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":56,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":148,"NO":16},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":41,"NO":14}],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":55,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":116,"NO":55},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":44,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":81,"NO":63},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":17,"NO":18}],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":43,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":87,"NO":81},{"POS":14,"DRIVER":"Best Of The Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":5,"NO":10}],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":41,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":111,"NO":11},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":70,"NO":44}],"DriverNumbers":[]}]

Austria Sprint After:
[{"Name":"Joey","TotalPoints":78,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":219,"NO":1},{"POS":13,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":63,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":150,"NO":4},{"POS":12,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":9}],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":59,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":116,"NO":55},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":58,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":148,"NO":16},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":41,"NO":14}],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":50,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":87,"NO":81},{"POS":14,"DRIVER":"Best Of The Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":5,"NO":10}],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":49,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":81,"NO":63},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":17,"NO":18}],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":45,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":111,"NO":11},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":70,"NO":44}],"DriverNumbers":[]}]

Austria Before:
[{"Name":"Jake","TotalPoints":45,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":148,"NO":16},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":70,"NO":44}],"DriverNumbers":[16,44]},{"Name":"Zac","TotalPoints":59,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":219,"NO":1},{"POS":12,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":9}],"DriverNumbers":[1,null]},{"Name":"Joey","TotalPoints":78,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":116,"NO":55},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":17,"NO":18}],"DriverNumbers":[55,18]},{"Name":"Jimmer","TotalPoints":58,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":81,"NO":63},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":5,"NO":10}],"DriverNumbers":[63,10,31,23,20,24,77,2]},{"Name":"Gabe","TotalPoints":49,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":87,"NO":81},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":41,"NO":14}],"DriverNumbers":[81,14]},{"Name":"Kristin","TotalPoints":63,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":111,"NO":11},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[11,22]},{"Name":"Nick","TotalPoints":50,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":150,"NO":4},{"POS":13,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":6,"NO":27}],"DriverNumbers":[4,27]}]

Austria After:
[{"Name":"Joey","TotalPoints":86,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":72,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":67,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":65,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":58,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":55,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":52,"Drivers":[],"DriverNumbers":[]}]


British Before:
[{"Name":"Joey","TotalPoints":86,"Drivers":[{"POS":6,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"MCLAREN MERCEDES","PTS":112,"NO":81},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":17,"NO":18}],"DriverNumbers":[81,18]},{"Name":"Jimmer","TotalPoints":72,"Drivers":[{"POS":4,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"FERRARI","PTS":135,"NO":55},{"POS":12,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"HAAS FERRARI","PTS":14,"NO":27}],"DriverNumbers":[55,27]},{"Name":"Kristin","TotalPoints":67,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"MCLAREN MERCEDES","PTS":156,"NO":4},{"POS":10,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB HONDA RBPT","PTS":19,"NO":22}],"DriverNumbers":[4,22]},{"Name":"Zac","TotalPoints":65,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"RED BULL RACING HONDA RBPT","PTS":237,"NO":1},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"ASTON MARTIN ARAMCO MERCEDES","PTS":41,"NO":14}],"DriverNumbers":[1,14]},{"Name":"Gabe","TotalPoints":58,"Drivers":[{"POS":5,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"RED BULL RACING HONDA RBPT","PTS":118,"NO":11},{"POS":8,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":85,"NO":44}],"DriverNumbers":[11,44]},{"Name":"Nick","TotalPoints":55,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"FERRARI","PTS":150,"NO":16},{"POS":13,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB HONDA RBPT","PTS":11}],"DriverNumbers":[16,null]},{"Name":"Jake","TotalPoints":52,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"MERCEDES","PTS":111,"NO":63},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"ALPINE RENAULT","PTS":6,"NO":10}],"DriverNumbers":[63,10,20,31,23,24,77,2]}]

British After:


[{"Name":"Joey","TotalPoints":97,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":84,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":77,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":76,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":71,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":55,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":52,"Drivers":[],"DriverNumbers":[]}]

Hungarian GP After
[{"Name":"Joey","TotalPoints":101,"Drivers":[],"DriverNumbers":[]},{"Name":"Jimmer","TotalPoints":97,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":89,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":83,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":80,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":62,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":59,"Drivers":[],"DriverNumbers":[]}]

Belgian GP After
[{"Name":"Jimmer","TotalPoints":119,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":109,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":97,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":92,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":87,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":67,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":65,"Drivers":[],"DriverNumbers":[]}]

Monza GP After
[{"Name":"Jimmer","TotalPoints":126,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":114,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":107,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":105,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":93,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":76,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":68,"Drivers":[],"DriverNumbers":[]}]


*/


/*
[{"Name":"Jimmer","TotalPoints":119,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":172,"NO":55},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":50,"NO":14}],"DriverNumbers":[55,14]},{"Name":"Joey","TotalPoints":109,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":295,"NO":1},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"Alpine Renault","PTS":8,"NO":10}],"DriverNumbers":[1,10,20,31,23,24,2,77]},{"Name":"Zac","TotalPoints":97,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":192,"NO":16},{"POS":13,"DRIVER":"Daniel Ricciardo","NATIONALITY":"AUS","CAR":"RB Honda RBPT","PTS":12,"NO":3}],"DriverNumbers":[16,3]},{"Name":"Kristin","TotalPoints":92,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":225,"NO":4},{"POS":8,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":122,"NO":63}],"DriverNumbers":[4,63]},{"Name":"Gabe","TotalPoints":87,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":154,"NO":44},{"POS":11,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":22,"NO":27}],"DriverNumbers":[44,27]},{"Name":"Nick","TotalPoints":67,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":179,"NO":81},{"POS":10,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[81,18]},{"Name":"Jake","TotalPoints":65,"Drivers":[{"POS":7,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":139,"NO":11},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[11,22]}]



post az
[{"Name":"Jimmer","TotalPoints":136,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":122,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":114,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":113,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":99,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":85,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":68,"Drivers":[],"DriverNumbers":[]}]

post singapore
[{"Name":"Jimmer","TotalPoints":142,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":133,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":122,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":118,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":111,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":91,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":75,"Drivers":[],"DriverNumbers":[]}]


austin sprint
[{"Name":"Jimmer","TotalPoints":142,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":155,"NO":63},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[63,11]},{"Name":"Joey","TotalPoints":133,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":279,"NO":4},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[55,23]},{"Name":"Kristin","TotalPoints":122,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":190,"NO":55},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":24,"NO":27}],"DriverNumbers":[16,14]},{"Name":"Zac","TotalPoints":118,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":174,"NO":44},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[1,3,10,20,31,null,24,2]},{"Name":"Gabe","TotalPoints":111,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":245,"NO":16},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[81,22]},{"Name":"Nick","TotalPoints":91,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":237,"NO":81},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"AUS","CAR":"RB Honda RBPT","PTS":12,"NO":3}],"DriverNumbers":[44,18]},{"Name":"Jake","TotalPoints":75,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":331,"NO":1},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":144,"NO":11}],"DriverNumbers":[4,27]}]

post sprint
[{"Name":"Jimmer","TotalPoints":146,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":155,"NO":63},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[63,11]},{"Name":"Joey","TotalPoints":139,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":279,"NO":4},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[55,23]},{"Name":"Kristin","TotalPoints":130,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":190,"NO":55},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":24,"NO":27}],"DriverNumbers":[16,14]},{"Name":"Zac","TotalPoints":121,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":174,"NO":44},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[1,3,10,20,31,null,24,2]},{"Name":"Gabe","TotalPoints":116,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":245,"NO":16},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[81,22]},{"Name":"Nick","TotalPoints":91,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":237,"NO":81},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"AUS","CAR":"RB Honda RBPT","PTS":12,"NO":3}],"DriverNumbers":[44,18]},{"Name":"Jake","TotalPoints":83,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":331,"NO":1},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":144,"NO":11}],"DriverNumbers":[4,27]}]


austin gp lineup
//[{"Name":"Jimmer","TotalPoints":142,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":155,"NO":63},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":144,"NO":11}],"DriverNumbers":[63,11]},{"Name":"Joey","TotalPoints":133,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":190,"NO":55},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[55,23]},{"Name":"Kristin","TotalPoints":122,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":245,"NO":16},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[16,14]},{"Name":"Zac","TotalPoints":118,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":331,"NO":1},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"AUS","CAR":"RB Honda RBPT","PTS":12,"NO":3}],"DriverNumbers":[1,3,10,20,31,null,24,2]},{"Name":"Gabe","TotalPoints":111,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":237,"NO":81},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[81,22]},{"Name":"Nick","TotalPoints":91,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":174,"NO":44},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[44,18]},{"Name":"Jake","TotalPoints":75,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":279,"NO":4},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":24,"NO":27}],"DriverNumbers":[4,27]}]
[{"Name":"Jimmer","TotalPoints":146,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":155,"NO":63},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":144,"NO":11}],"DriverNumbers":[63,11]},{"Name":"Joey","TotalPoints":139,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":190,"NO":55},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[55,23]},{"Name":"Kristin","TotalPoints":130,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":245,"NO":16},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[16,14]},{"Name":"Zac","TotalPoints":121,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":331,"NO":1},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"AUS","CAR":"RB Honda RBPT","PTS":12,"NO":3}],"DriverNumbers":[1,3,10,20,31,30,24,2,43]},{"Name":"Gabe","TotalPoints":116,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":237,"NO":81},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[81,22]},{"Name":"Nick","TotalPoints":93,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":174,"NO":44},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[44,18]},{"Name":"Jake","TotalPoints":83,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":279,"NO":4},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":24,"NO":27}],"DriverNumbers":[4,27]}]

post austin
[{"Name":"Jimmer","TotalPoints":155,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":148,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":140,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":132,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":122,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":93,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":93,"Drivers":[],"DriverNumbers":[]}]

mexican gp
[{"Name":"Jimmer","TotalPoints":155,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":167,"NO":63},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[63,23,63,14]},{"Name":"Joey","TotalPoints":148,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":275,"NO":16},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[4,14,16,18]},{"Name":"Zac","TotalPoints":132,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":247,"NO":81},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[44,18,81,22]},{"Name":"Kristin","TotalPoints":140,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":215,"NO":55},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"AUS","CAR":"RB Honda RBPT","PTS":12,"NO":3}],"DriverNumbers":[55,27,55,3,20,10,null,31,null,24]},{"Name":"Gabe","TotalPoints":122,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":354,"NO":1},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":150,"NO":11}],"DriverNumbers":[16,22,1,11]},{"Name":"Nick","TotalPoints":93,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":177,"NO":44},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[81,3,10,20,31,77,24,2,44,23,30,43,50]},{"Name":"Jake","TotalPoints":93,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":297,"NO":4},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":29,"NO":27}],"DriverNumbers":[1,11,4,27]}]

post mexican gp
[{"Name":"Jimmer","TotalPoints":161,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":157,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":154,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":135,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":127,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":104,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":100,"Drivers":[],"DriverNumbers":[]}]

Brazlian Sprint 
[{"Name":"Jimmer","TotalPoints":161,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":297,"NO":16},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"Alpine Renault","PTS":11,"NO":10}],"DriverNumbers":[16,10,null,null,31,null,24,77]},{"Name":"Joey","TotalPoints":157,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":244,"NO":55},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[55,23]},{"Name":"Kristin","TotalPoints":154,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":323,"NO":4},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":31,"NO":27}],"DriverNumbers":[4,27]},{"Name":"Zac","TotalPoints":135,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":189,"NO":44},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[44,14]},{"Name":"Gabe","TotalPoints":127,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":367,"NO":1},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[1,22]},{"Name":"Jake","TotalPoints":104,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":180,"NO":63},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[63,18]},{"Name":"Nick","TotalPoints":100,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":258,"NO":81},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":151,"NO":11}],"DriverNumbers":[81,11]}]

Sprint Results
[{"Name":"Jimmer","TotalPoints":169,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":161,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":162,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":135,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":132,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":107,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":108,"Drivers":[],"DriverNumbers":[]}]

Brazlian GP
[{"Name":"Jimmer","TotalPoints":169,"Drivers":[{"POS":6,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":189,"NO":44},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"Alpine Renault","PTS":11,"NO":10}],"DriverNumbers":[44,10,null,null,31,null,24,77]},{"Name":"Joey","TotalPoints":161,"Drivers":[{"POS":7,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":180,"NO":63},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":31,"NO":27}],"DriverNumbers":[63,27]},{"Name":"Kristin","TotalPoints":162,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":244,"NO":55},{"POS":12,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":22,"NO":22}],"DriverNumbers":[55,22]},{"Name":"Zac","TotalPoints":135,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":367,"NO":1},{"POS":11,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[1,18]},{"Name":"Gabe","TotalPoints":132,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":258,"NO":81},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[81,14]},{"Name":"Jake","TotalPoints":107,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":297,"NO":16},{"POS":13,"DRIVER":"Alexander Albon","NATIONALITY":"THA","CAR":"Williams Mercedes","PTS":12,"NO":23}],"DriverNumbers":[16,23]},{"Name":"Nick","TotalPoints":108,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":323,"NO":4},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":151,"NO":11}],"DriverNumbers":[4,11]}]

Brazilian GP Results
[{"Name":"Jimmer","TotalPoints":187,"Drivers":[],"DriverNumbers":[]},{"Name":"Joey","TotalPoints":168,"Drivers":[],"DriverNumbers":[]},{"Name":"Kristin","TotalPoints":166,"Drivers":[],"DriverNumbers":[]},{"Name":"Zac","TotalPoints":146,"Drivers":[],"DriverNumbers":[]},{"Name":"Gabe","TotalPoints":135,"Drivers":[],"DriverNumbers":[]},{"Name":"Jake","TotalPoints":113,"Drivers":[],"DriverNumbers":[]},{"Name":"Nick","TotalPoints":113,"Drivers":[],"DriverNumbers":[]}]

Las Vegas GP
[{"Name":"Jimmer","TotalPoints":187,"Drivers":[{"POS":6,"DRIVER":"George Russell","NATIONALITY":"GBR","CAR":"Mercedes","PTS":192,"NO":63},{"POS":9,"DRIVER":"Fernando Alonso","NATIONALITY":"ESP","CAR":"Aston Martin Aramco Mercedes","PTS":62,"NO":14}],"DriverNumbers":[63,14]},{"Name":"Joey","TotalPoints":168,"Drivers":[{"POS":3,"DRIVER":"Charles Leclerc","NATIONALITY":"MON","CAR":"Ferrari","PTS":307,"NO":16},{"POS":14,"DRIVER":"Best of the Rest!","NATIONALITY":"FRA","CAR":"Alpine Renault","PTS":23,"NO":31}],"DriverNumbers":[16,31,20,23,43,40,24,77]},{"Name":"Kristin","TotalPoints":166,"Drivers":[{"POS":1,"DRIVER":"Max Verstappen","NATIONALITY":"NED","CAR":"Red Bull Racing Honda RBPT","PTS":393,"NO":1},{"POS":8,"DRIVER":"Sergio Perez","NATIONALITY":"MEX","CAR":"Red Bull Racing Honda RBPT","PTS":151,"NO":11}],"DriverNumbers":[1,11]},{"Name":"Zac","TotalPoints":146,"Drivers":[{"POS":5,"DRIVER":"Carlos Sainz","NATIONALITY":"ESP","CAR":"Ferrari","PTS":244,"NO":55},{"POS":11,"DRIVER":"Yuki Tsunoda","NATIONALITY":"JPN","CAR":"RB Honda RBPT","PTS":28,"NO":22}],"DriverNumbers":[55,22]},{"Name":"Gabe","TotalPoints":135,"Drivers":[{"POS":4,"DRIVER":"Oscar Piastri","NATIONALITY":"AUS","CAR":"McLaren Mercedes","PTS":262,"NO":81},{"POS":12,"DRIVER":"Pierre Gasly","NATIONALITY":"FRA","CAR":"Alpine Renault","PTS":26,"NO":10}],"DriverNumbers":[81,10]},{"Name":"Jake","TotalPoints":113,"Drivers":[{"POS":7,"DRIVER":"Lewis Hamilton","NATIONALITY":"GBR","CAR":"Mercedes","PTS":190,"NO":44},{"POS":10,"DRIVER":"Nico Hulkenberg","NATIONALITY":"GER","CAR":"Haas Ferrari","PTS":31,"NO":27}],"DriverNumbers":[44,27]},{"Name":"Nick","TotalPoints":113,"Drivers":[{"POS":2,"DRIVER":"Lando Norris","NATIONALITY":"GBR","CAR":"McLaren Mercedes","PTS":331,"NO":4},{"POS":13,"DRIVER":"Lance Stroll","NATIONALITY":"CAN","CAR":"Aston Martin Aramco Mercedes","PTS":24,"NO":18}],"DriverNumbers":[4,18]}]



*/