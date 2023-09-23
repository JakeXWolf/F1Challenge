import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConstructorChamp } from '../models/constructor-champ';
import { Formula1Driver } from '../models/f1-driver';

@Injectable({
  providedIn: 'root'
})
export class TestData {

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
}