import { Component } from '@angular/core';
import { ItemList } from '../shared/interfaces/list.interface';
import { HolidayService } from '../shared/services/holiday.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceDto } from '../shared/interfaces/holiday.interface';

@Component({
  selector: 'app-holidays-tab',
  templateUrl: 'holidaysTab.page.html',
  styleUrls: ['holidaysTab.page.scss'],
})
export class HolidaysTabPage {
  page: string = 'holidays';
  places: ItemList[] = [];
  constructor(
    private readonly _holidayService: HolidayService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this._getPlaceList();
  }
  private _getPlaceList() {
    this._holidayService.placeOb$.subscribe((placeList: PlaceDto[]) => {
      this.places = placeList.map((element: PlaceDto) => {
        return {
          id: element.id,
          name: `${element.city} (${element.country})`,
        };
      });
    });
    this._holidayService.getList();
  }
  goToDetailPage(id: number): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: number): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  deletePlace(id: number): void {
    this._holidayService.deletePlace(id);
  }
  goToAddPage(): void {
    this._router.navigate(['create'], { relativeTo: this._route });
  }
}
