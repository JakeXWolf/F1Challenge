import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConstructorChamp } from '../models/constructor-champ';
import { Formula1Driver } from '../models/f1-driver';
import { FormulaOneRace } from '../models/f1-race';

@Injectable({
  providedIn: 'root',
})
export class DataService {

    constructor(private http: HttpClient) {}

    getCurrentChampStandings() {
        // THIS IS THE COMPETITION
        // const result: string = this.fetchDocumentContent();
        // return result;
    }

    getCurrentDriversChampStr() {
        // THESE ARE THE DRIVERS
        return this.getDriverStandingsAfterAustria();
    }

    // grabs raw text from file
    public fetchDocumentContent(): Observable<any> {
        const docId = '1GKAOen0a25cxv51M_LUHX5bZcE-bgE4U5yyRP_5u7BE';
        const url = `https://docs.google.com/document/d/${docId}/export?format=txt`;

        return this.http.get(url, { responseType: 'text' }).pipe(
            map(text => {
                // Manipulate the text into an object
                const processedData = { content: text };
                return processedData;
            })
        );
    }

    public getConstructorBeforeWeekend(): Observable<ConstructorChamp[]> {
        const docId = '1GKAOen0a25cxv51M_LUHX5bZcE-bgE4U5yyRP_5u7BE';
        const url = `https://docs.google.com/document/d/${docId}/export?format=txt`;

        return this.http.get(url, { responseType: 'text' }).pipe(
            map(text => {
                const constructorChamps: ConstructorChamp[] = JSON.parse(text);
                return constructorChamps;
            })
        )
    }

    // static items

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
            {NO: 3	,   DRIVER:     'Daniel Ricciardo'	, CAR: 'ALPHATAURI HONDA RBPT' } as Formula1Driver,
            {NO: 43	,   DRIVER:     'Franco Colapinto'	, CAR: 'WILLIAMS MERCEDES' } as Formula1Driver,
            {NO: 50	,   DRIVER:     'Oliver Bearman'	, CAR: 'HAAS FERRARI' } as Formula1Driver,
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
        return "object of constructor with their points and their drivers";
    }

    getDriverStandingsAfterAustria(): string {
        return `driver standings string`;
    }

    getFormula1RacesLeft() {
        return [
            {
              "id": 1,
              "Name": "Italian Grand Prix",
              "RaceDate": "2024-08-30",
              "Location": "Monza",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1244/italy/race-result"
            },
            {
              "id": 2,
              "Name": "Azerbaijan Grand Prix",
              "RaceDate": "2024-09-13",
              "Location": "Baku",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1245/azerbaijan/race-result"
            },
            {
              "id": 3,
              "Name": "Singapore Grand Prix",
              "RaceDate": "2024-09-20",
              "Location": "Marina Bay",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1246/singapore/race-result"
            },
            {
              "id": 4,
              "Name": "United States Grand Prix",
              "RaceDate": "2024-10-18",
              "Location": "Circuit of the Americas",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1247/usa/race-result"
            },
            {
              "id": 5,
              "Name": "Mexican Grand Prix",
              "RaceDate": "2024-10-25",
              "Location": "Autódromo Hermanos Rodríguez",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1248/mexico/race-result"
            },
            {
              "id": 6,
              "Name": "Brazilian Grand Prix",
              "RaceDate": "2024-11-01",
              "Location": "Interlagos",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1249/brazil/race-result"
            },
            {
              "id": 7,
              "Name": "Las Vegas Grand Prix",
              "RaceDate": "2024-11-21",
              "Location": "Las Vegas Street Circuit",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1250/las-vegas/race-result"
            },
            {
              "id": 8,
              "Name": "Qatar Grand Prix",
              "RaceDate": "2024-11-29",
              "Location": "Losail International Circuit",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1251/qatar/race-result"
            },
            {
              "id": 9,
              "Name": "Abu Dhabi Grand Prix",
              "RaceDate": "2024-12-06",
              "Location": "Yas Marina Circuit",
              "Formula1URL": "https://www.formula1.com/en/results/2024/races/1252/abu-dhabi/race-result"
            }
          ].map((race: any) => ({
            id: race.id,
            Name: race.Name,
            RaceDate: race.RaceDate,
            Location: race.Location,
            Formula1URL: race.Formula1URL
          }));
          
    }
}