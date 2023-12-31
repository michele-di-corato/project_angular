import { HolidayType } from './holiday.interface';

export interface UserDto {
  id: number;
  name?: string;
  surname: string;
  gender?: Genders;
  birthYear: number;
  residence: string;
  favouriteHolidayType?: HolidayType;
  favouritePlace?: number;
}

export enum Genders {
  Man,
  Woman,
  Other,
}
