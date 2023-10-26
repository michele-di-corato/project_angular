import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersTabPage } from './usersTab.page';

import { UsersTabPageRoutingModule } from './usersTab-routing.module';
import { ListComponentModule } from '../shared/components/list/list.module';
import { HeaderComponentModule } from '../shared/components/header/header.module';

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
  declarations: [UsersTabPage],
})
export class UsersTabPageModule {}
