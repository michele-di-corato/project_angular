import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysTabPage } from './holidaysTab.page';
import { HolidayDetailsTabPage } from './detailsHoliday/detailsHoliday.page';
import { HolidayEditTabPage } from './editHoliday/editHoliday.page';

const routes: Routes = [
  {
    path: '',
    component: HolidaysTabPage,
  },
  {
    path: 'details/:id',
    component: HolidayDetailsTabPage,
  },
  {
    path: 'edit/:id',
    component: HolidayEditTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidaysTabPageRoutingModule {}
