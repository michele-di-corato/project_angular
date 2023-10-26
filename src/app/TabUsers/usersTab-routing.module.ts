import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTabPage } from './usersTab.page';
import { UserDetailsTabPage } from './detailsUser/detailsUser.page';
import { UserEditTabPage } from './editUser/editUser.page';

const routes: Routes = [
  {
    path: '',
    component: UsersTabPage,
  },
  {
    path: 'details/:id',
    component: UserDetailsTabPage,
  },
  {
    path: 'edit/:id',
    component: UserEditTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersTabPageRoutingModule {}
