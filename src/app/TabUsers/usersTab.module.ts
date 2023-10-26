import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersTabPage } from './usersTab.page';

import { UsersTabPageRoutingModule } from './usersTab-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, UsersTabPageRoutingModule],
  declarations: [UsersTabPage],
})
export class UsersTabPageModule {}
