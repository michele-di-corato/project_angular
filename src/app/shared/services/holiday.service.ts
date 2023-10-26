import { Injectable } from '@angular/core';
import { HolidayType, PlaceDto, Season } from '../interfaces/holiday.interface';
import { Observable, Subject, map } from 'rxjs';
import { Selector } from '../interfaces/selector.interface';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  constructor() {}
  private _places: PlaceDto[] = [
    {
      id: 1,
      country: 'Italy',
      city: 'Rome',
      favouriteSeason: Season.Spring,
      holidayType: HolidayType.Culture,
      temperatureMax: 25,
      temperatureMin: 12,
    },
    {
      id: 2,
      country: 'France',
      city: 'Paris',
      favouriteSeason: Season.Summer,
      holidayType: HolidayType.Adventure,
      temperatureMax: 30,
      temperatureMin: 18,
    },
    {
      id: 3,
      country: 'USA',
      city: 'New York',
      favouriteSeason: Season.Fall,
      holidayType: HolidayType.Culture,
      temperatureMax: 22,
      temperatureMin: 10,
    },
    {
      id: 4,
      country: 'Japan',
      city: 'Tokyo',
      favouriteSeason: Season.Spring,
      holidayType: HolidayType.Adventure,
      temperatureMax: 20,
      temperatureMin: 12,
    },
    {
      id: 5,
      country: 'Australia',
      city: 'Sydney',
      favouriteSeason: Season.Summer,
      holidayType: HolidayType.Relax,
      temperatureMax: 28,
      temperatureMin: 17,
    },
    {
      id: 6,
      country: 'Canada',
      city: 'Vancouver',
      favouriteSeason: Season.Summer,
      holidayType: HolidayType.Adventure,
      temperatureMax: 26,
      temperatureMin: 15,
    },
    {
      id: 7,
      country: 'Spain',
      city: 'Barcelona',
      favouriteSeason: Season.Fall,
      holidayType: HolidayType.Relax,
      temperatureMax: 23,
      temperatureMin: 14,
    },
    {
      id: 8,
      country: 'Brazil',
      city: 'Rio de Janeiro',
      favouriteSeason: Season.Summer,
      holidayType: HolidayType.Adventure,
      temperatureMax: 31,
      temperatureMin: 20,
    },
    {
      id: 9,
      country: 'Germany',
      city: 'Berlin',
      favouriteSeason: Season.Spring,
      holidayType: HolidayType.Culture,
      temperatureMax: 18,
      temperatureMin: 8,
    },
    {
      id: 10,
      country: 'Greece',
      city: 'Athens',
      favouriteSeason: Season.Spring,
      holidayType: HolidayType.Culture,
      temperatureMax: 22,
      temperatureMin: 13,
    },
    {
      id: 11,
      country: 'South Africa',
      city: 'Cape Town',
      favouriteSeason: Season.Winter,
      holidayType: HolidayType.Adventure,
      temperatureMax: 18,
      temperatureMin: 8,
    },
    {
      id: 12,
      country: 'China',
      city: 'Beijing',
      favouriteSeason: Season.Fall,
      holidayType: HolidayType.Culture,
      temperatureMax: 19,
      temperatureMin: 9,
    },
    {
      id: 13,
      country: 'India',
      city: 'Mumbai',
      favouriteSeason: Season.Winter,
      holidayType: HolidayType.Culture,
      temperatureMax: 28,
      temperatureMin: 19,
    },
    {
      id: 14,
      country: 'Mexico',
      city: 'Cancun',
      favouriteSeason: Season.Summer,
      holidayType: HolidayType.Relax,
      temperatureMax: 30,
      temperatureMin: 24,
    },
    {
      id: 15,
      country: 'Thailand',
      city: 'Bangkok',
      favouriteSeason: Season.Winter,
      holidayType: HolidayType.Adventure,
      temperatureMax: 32,
      temperatureMin: 22,
    },
    {
      id: 16,
      country: 'Netherlands',
      city: 'Amsterdam',
      favouriteSeason: Season.Fall,
      holidayType: HolidayType.Culture,
      temperatureMax: 17,
      temperatureMin: 9,
    },
    {
      id: 17,
      country: 'United Kingdom',
      city: 'London',
      favouriteSeason: Season.Spring,
      holidayType: HolidayType.Culture,
      temperatureMax: 20,
      temperatureMin: 11,
    },
    {
      id: 18,
      country: 'Portugal',
      city: 'Lisbon',
      favouriteSeason: Season.Fall,
      holidayType: HolidayType.Relax,
      temperatureMax: 25,
      temperatureMin: 16,
    },
    {
      id: 19,
      country: 'Argentina',
      city: 'Buenos Aires',
      favouriteSeason: Season.Spring,
      holidayType: HolidayType.Culture,
      temperatureMax: 23,
      temperatureMin: 15,
    },
    {
      id: 20,
      country: 'Russia',
      city: 'Moscow',
      favouriteSeason: Season.Winter,
      holidayType: HolidayType.Culture,
      temperatureMax: -5,
      temperatureMin: -12,
    },
  ];
  private _numId = this._places.length;
  private _place$ = new Subject<PlaceDto[]>();
  placeOb$ = this._place$.asObservable();
  getList(): void {
    this._place$.next(this._places);
  }
  getPlaceById(id: number): PlaceDto | undefined {
    let place = this._places.find((p) => p.id === id);
    return place;
  }
  updatePlace(editedPlace: PlaceDto): void {
    const i = this._places.findIndex(
      (place: PlaceDto) => place.id === editedPlace.id
    );
    if (i !== -1) {
      this._places[i] = editedPlace;
    }
    this._place$.next(this._places);
  }
  deletePlace(id: number) {
    const i = this._places.findIndex((place: PlaceDto) => place.id == id);
    if (i !== -1) {
      this._places.splice(i, 1);
    }
    this._place$.next(this._places);
  }
  addPlace(createdPlace: PlaceDto): void {
    this._numId += 1;
    createdPlace.id = this._numId;
    this._places.push(createdPlace);
    this._place$.next(this._places);
  }
  _getSeason(season: Season | undefined): string {
    switch (season) {
      case Season.Spring:
        return 'Spring';
      case Season.Summer:
        return 'Summer';
      case Season.Fall:
        return 'Fall';
      case Season.Winter:
        return 'Winter';
      default:
        return 'Unknown Season';
    }
  }
  _getHolidayType(holidayType: HolidayType | undefined): string {
    switch (holidayType) {
      case HolidayType.Adventure:
        return 'Adventure';
      case HolidayType.Relax:
        return 'Relax';
      case HolidayType.Family:
        return 'Family';
      case HolidayType.Culture:
        return 'Culture';
      default:
        return 'Unknown Holiday Type';
    }
  }
}
