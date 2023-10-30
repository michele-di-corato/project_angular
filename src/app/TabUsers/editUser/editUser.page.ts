import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HolidayType, PlaceDto } from '@interfaces/holiday.interface';
import { Selector } from '@interfaces/selector.interface';
import { Genders, UserDto } from '@interfaces/user.interface';
import { HolidayService } from '@services/holiday.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: 'editUser.page.html',
  styleUrls: ['editUser.page.scss'],
})
export class UserEditTabPage {
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
      this._userService.updateUser(this.formUser?.value);
    }
    this._location.back();
  }
}
