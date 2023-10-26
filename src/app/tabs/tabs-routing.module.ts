import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'holidays',
        loadChildren: () =>
          import('../TabHolidays/holidaysTab.module').then(
            (m) => m.HolidaysTabPageModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../TabUsers/usersTab.module').then(
            (m) => m.UsersTabPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/holidays',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/holidays',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
