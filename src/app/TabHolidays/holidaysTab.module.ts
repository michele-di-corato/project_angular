import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HolidaysTabPage } from './holidaysTab.page';

import { HolidaysTabPageRoutingModule } from './holidaysTab-routing.module';
import { ListComponentModule } from '../shared/components/list/list.module';
import { HeaderComponentModule } from '../shared/components/header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HolidaysTabPageRoutingModule,
    ListComponentModule,
    HeaderComponentModule,
  ],
  declarations: [HolidaysTabPage],
})
export class HolidaysTabPageModule {}
