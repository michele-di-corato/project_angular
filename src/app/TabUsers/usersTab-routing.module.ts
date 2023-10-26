import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTabPage } from './usersTab.page';

const routes: Routes = [
  {
    path: '',
    component: UsersTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersTabPageRoutingModule {}
