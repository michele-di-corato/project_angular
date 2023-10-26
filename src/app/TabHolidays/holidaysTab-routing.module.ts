import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysTabPage } from './holidaysTab.page';

const routes: Routes = [
  {
    path: '',
    component: HolidaysTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HolidaysTabPageRoutingModule {}
