import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceDto } from '@interfaces/holiday.interface';
import { HolidayService } from '@services/holiday.service';

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
