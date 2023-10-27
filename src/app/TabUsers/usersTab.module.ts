import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersTabPage } from './usersTab.page';

import { UsersTabPageRoutingModule } from './usersTab-routing.module';
import { ListComponentModule } from '../shared/components/list/list.module';
import { HeaderComponentModule } from '../shared/components/header/header.module';
import { UserDetailsTabPage } from './detailsUser/detailsUser.page';
import { UserEditTabPage } from './editUser/editUser.page';
import { UserCreateTabPage } from './createUser/createUser.page';
import { HolidayService } from '../shared/services/holiday.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    UsersTabPageRoutingModule,
    ListComponentModule,
    HeaderComponentModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UsersTabPage,
    UserDetailsTabPage,
    UserEditTabPage,
    UserCreateTabPage,
  ],
})
export class UsersTabPageModule {}
