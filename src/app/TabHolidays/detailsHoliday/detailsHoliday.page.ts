import { Component } from '@angular/core';
import { HolidayService } from 'src/app/shared/services/holiday.service';
import {
  HolidayType,
  PlaceDto,
  Season,
} from 'src/app/shared/interfaces/holiday.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holiday-details',
  templateUrl: 'detailsHoliday.page.html',
  styleUrls: ['detailsHoliday.page.scss'],
})
export class HolidayDetailsTabPage {
  back: boolean = true;
  page: string = 'holidays';
  place: PlaceDto | undefined;
  season: string | undefined;
  holiday: string | undefined;
  constructor(
    private readonly _holidayService: HolidayService,
    private readonly _route: ActivatedRoute
  ) {
    const id = this._route.snapshot.params['id'];
    this.place = this._holidayService.getPlaceById(Number(id));
    this.season = this._holidayService._getSeason(this.place?.favouriteSeason);
    this.holiday = this._holidayService._getHolidayType(
      this.place?.holidayType
    );
  }
}
