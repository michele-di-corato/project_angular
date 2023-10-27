import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersTabPage } from './usersTab.page';
import { UserDetailsTabPage } from './detailsUser/detailsUser.page';
import { UserEditTabPage } from './editUser/editUser.page';
import { UserCreateTabPage } from './createUser/createUser.page';
import { oddGuardGuard } from '../odd-guard.guard';
import { detailDataResolver } from '../detail-data.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersTabPage,
  },
  {
    path: 'details/:id',
    component: UserDetailsTabPage,
    canActivate: [oddGuardGuard],
    resolve: { user: detailDataResolver },
  },
  {
    path: 'edit/:id',
    component: UserEditTabPage,
  },
  {
    path: 'create',
    component: UserCreateTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersTabPageRoutingModule {}
