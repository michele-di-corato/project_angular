import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HolidayType, PlaceDto, Season } from '@interfaces/holiday.interface';
import { Selector } from '@interfaces/selector.interface';
import { HolidayService } from '@services/holiday.service';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: 'editHoliday.page.html',
  styleUrls: ['editHoliday.page.scss'],
})
export class HolidayEditTabPage {
  page: string = 'holidays';
  back: boolean = true;
  place: PlaceDto | undefined;
  formPlace: FormGroup | undefined;
  constructor(
    private readonly _holidayService: HolidayService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    const id = this._route.snapshot.params['id'];
    this.place = this._holidayService.getPlaceById(Number(id));
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
      country: new FormControl(this.place?.country),
      city: new FormControl(this.place?.city),
      favouriteSeason: new FormControl(this.place?.favouriteSeason),
      holidayType: new FormControl(this.place?.holidayType),
      temperatureMax: new FormControl(this.place?.temperatureMax),
      temperatureMin: new FormControl(this.place?.temperatureMin),
    });
  }
  submitForm() {
    if (this.formPlace?.valid) {
      this._holidayService.updatePlace(this.formPlace?.value);
    }
    this._location.back();
  }
}
