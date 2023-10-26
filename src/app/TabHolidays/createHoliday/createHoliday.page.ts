import { Component } from '@angular/core';
import { HolidayService } from 'src/app/shared/services/holiday.service';
import {
  HolidayType,
  PlaceDto,
  Season,
} from 'src/app/shared/interfaces/holiday.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Selector } from 'src/app/shared/interfaces/selector.interface';

@Component({
  selector: 'app-create-holiday',
  templateUrl: 'createHoliday.page.html',
  styleUrls: ['createHoliday.page.scss'],
})
export class HolidayCreateTabPage {
  page: string = 'holidays';
  back: boolean = true;
  place: PlaceDto | undefined;
  formPlace: FormGroup | undefined;
  constructor(
    private readonly _holidayService: HolidayService,
    private readonly _location: Location
  ) {
    this._setForm();
  }
  seasonOptions: Selector[] = [
    { id: Season.Spring, label: 'Spring' },
    { id: Season.Summer, label: 'Summer' },
    { id: Season.Fall, label: 'Fall' },
    { id: Season.Winter, label: 'Winter' },
  ];

  holidayOptions: Selector[] = [
    { id: HolidayType.Adventure, label: 'Adventure' },
    { id: HolidayType.Relax, label: 'Relax' },
    { id: HolidayType.Family, label: 'Family' },
    { id: HolidayType.Culture, label: 'Culture' },
  ];

  private _setForm() {
    this.formPlace = new FormGroup({
      id: new FormControl(this.place?.id),
      country: new FormControl(this.place?.country, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      city: new FormControl(this.place?.city, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      favouriteSeason: new FormControl(this.place?.favouriteSeason),
      holidayType: new FormControl(this.place?.holidayType),
      temperatureMax: new FormControl(this.place?.temperatureMax, [
        Validators.max(50),
        Validators.min(-50),
      ]),
      temperatureMin: new FormControl(this.place?.temperatureMin, [
        Validators.max(50),
        Validators.min(-50),
      ]),
    });
  }
  submitForm() {
    if (this.formPlace?.valid) {
      this._holidayService.addPlace(this.formPlace?.value);
    }
    this._location.back();
  }
}
