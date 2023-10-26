export interface PlaceDto {
  id: number;
  country: string;
  city: string;
  favouriteSeason: Season;
  holidayType: HolidayType;
  temperatureMax?: number;
  temperatureMin?: number;
}

export enum Season {
  Spring,
  Summer,
  Fall,
  Winter,
}

export enum HolidayType {
  Adventure,
  Relax,
  Family,
  Culture,
}
