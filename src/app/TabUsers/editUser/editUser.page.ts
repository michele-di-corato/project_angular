import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Genders, UserDto } from 'src/app/shared/interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Selector } from 'src/app/shared/interfaces/selector.interface';
import { HolidayType } from 'src/app/shared/interfaces/holiday.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: 'editUser.page.html',
  styleUrls: ['editUser.page.scss'],
})
export class UserEditTabPage {
  page: string = 'users';
  back: boolean = true;
  user: UserDto | undefined;
  formUser: FormGroup | undefined;
  constructor(
    private readonly _userService: UserService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    const id = this._route.snapshot.params['id'];
    this.user = this._userService.getUserById(Number(id));
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
    });
  }
  submitForm() {
    if (this.formUser?.valid) {
      this._userService.updateUser(this.formUser?.value);
    }
    this._location.back();
  }
}
