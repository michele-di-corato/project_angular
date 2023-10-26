import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Genders, UserDto } from 'src/app/shared/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Selector } from 'src/app/shared/interfaces/selector.interface';
import {
  HolidayType,
  PlaceDto,
} from 'src/app/shared/interfaces/holiday.interface';
import { HolidayService } from 'src/app/shared/services/holiday.service';

@Component({
  selector: 'app-create-user',
  templateUrl: 'createUser.page.html',
  styleUrls: ['createUser.page.scss'],
})
export class UserCreateTabPage {
  page: string = 'users';
  back: boolean = true;
  user: UserDto | undefined;
  places: Selector[] = [];
  formUser: FormGroup | undefined;
  constructor(
    private readonly _userService: UserService,
    private readonly _holidayService: HolidayService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    const id = this._route.snapshot.params['id'];
    this.user = this._userService.getUserById(Number(id));
    this._holidayService.placeOb$.subscribe((placeList: PlaceDto[]) => {
      this.places = placeList.map((element: PlaceDto) => {
        return {
          id: element.id,
          label: `${element.city} (${element.country})`,
        };
      });
    });
    this._holidayService.getList();
    this._setForm();
  }
  holidayOptions: Selector[] = [
    { id: HolidayType.Adventure, label: 'Adventure' },
    { id: HolidayType.Relax, label: 'Relax' },
    { id: HolidayType.Family, label: 'Family' },
    { id: HolidayType.Culture, label: 'Culture' },
  ];
  genderOptions: Selector[] = [
    { id: Genders.Man, label: 'Man' },
    { id: Genders.Woman, label: 'Woman' },
    { id: Genders.Other, label: 'Other' },
  ];

  private _setForm() {
    this.formUser = new FormGroup({
      id: new FormControl(this.user?.id),
      name: new FormControl(this.user?.name),
      surname: new FormControl(this.user?.surname),
      gender: new FormControl(this.user?.gender),
      birthYear: new FormControl(this.user?.birthYear),
      residence: new FormControl(this.user?.residence),
      favouriteHolidayType: new FormControl(this.user?.favouriteHolidayType),
      favouritePlace: new FormControl(this.user?.favouritePlace),
    });
  }
  submitForm() {
    if (this.formUser?.valid) {
      this._userService.addUser(this.formUser?.value);
    }
    this._location.back();
  }
}
