import { Injectable } from '@angular/core';
import { Genders, UserDto } from '../interfaces/user.interface';
import { Observable, Subject, map } from 'rxjs';
import { HolidayType, Season } from '../interfaces/holiday.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private _users: UserDto[] = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      gender: Genders.Man,
      birthYear: 1985,
      residence: 'New York',
      favouriteHolidayType: HolidayType.Adventure,
    },
    {
      id: 2,
      name: 'Alice',
      surname: 'Johnson',
      gender: Genders.Woman,
      birthYear: 1990,
      residence: 'Los Angeles',
      favouriteHolidayType: HolidayType.Culture,
    },
    {
      id: 3,
      name: 'Michael',
      surname: 'Smith',
      gender: Genders.Man,
      birthYear: 1982,
      residence: 'London',
      favouriteHolidayType: HolidayType.Adventure,
    },
    {
      id: 4,
      name: 'Emily',
      surname: 'Wilson',
      gender: Genders.Woman,
      birthYear: 1988,
      residence: 'Sydney',
      favouriteHolidayType: HolidayType.Relax,
    },
    {
      id: 5,
      name: 'Daniel',
      surname: 'Brown',
      gender: Genders.Man,
      birthYear: 1979,
      residence: 'Berlin',
      favouriteHolidayType: HolidayType.Culture,
    },
    {
      id: 6,
      name: 'Olivia',
      surname: 'Miller',
      gender: Genders.Woman,
      birthYear: 1987,
      residence: 'Toronto',
      favouriteHolidayType: HolidayType.Family,
    },
    {
      id: 7,
      name: 'Liam',
      surname: 'Davis',
      gender: Genders.Man,
      birthYear: 1981,
      residence: 'Tokyo',
      favouriteHolidayType: HolidayType.Adventure,
    },
    {
      id: 8,
      name: 'Sophia',
      surname: 'Moore',
      gender: Genders.Woman,
      birthYear: 1989,
      residence: 'Paris',
      favouriteHolidayType: HolidayType.Culture,
    },
    {
      id: 9,
      name: 'Ethan',
      surname: 'Garcia',
      gender: Genders.Man,
      birthYear: 1984,
      residence: 'Sydney',
      favouriteHolidayType: HolidayType.Relax,
    },
    {
      id: 10,
      name: 'Ava',
      surname: 'Perez',
      gender: Genders.Woman,
      birthYear: 1983,
      residence: 'Barcelona',
      favouriteHolidayType: HolidayType.Culture,
    },
  ];
  private _numId = this._users.length;
  private _user$ = new Subject<UserDto[]>();
  userOb$ = this._user$.asObservable();
  getList(): void {
    this._user$.next(this._users);
  }
  getUserById(id: number): UserDto | undefined {
    let user = this._users.find((u) => u.id === id);
    return user;
  }
  updateUser(editedUser: UserDto): void {
    const i = this._users.findIndex(
      (user: UserDto) => user.id === editedUser.id
    );
    if (i !== -1) {
      this._users[i] = editedUser;
    }
    this._user$.next(this._users);
  }
  deleteUser(id: number) {
    const i = this._users.findIndex((user: UserDto) => user.id == id);
    if (i !== -1) {
      this._users.splice(i, 1);
    }
    this._user$.next(this._users);
  }
  addUser(createdUser: UserDto): void {
    this._numId += 1;
    createdUser.id = this._numId;
    this._users.push(createdUser);
    this._user$.next(this._users);
  }
  _getGender(gender: Genders | undefined): string {
    switch (gender) {
      case Genders.Man:
        return 'Man';
      case Genders.Woman:
        return 'Woman';
      case Genders.Other:
        return 'Other';
      default:
        return 'Gender not specified';
    }
  }
}
