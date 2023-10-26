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
    this.season = this._getSeason(this.place?.favouriteSeason);
    this.holiday = this._getHolidayType(this.place?.holidayType);
  }
  private _getSeason(season: Season | undefined): string {
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
  private _getHolidayType(holidayType: HolidayType | undefined): string {
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
