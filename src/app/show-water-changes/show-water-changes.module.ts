import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowWaterChangesPageRoutingModule } from './show-water-changes-routing.module';

import { ShowWaterChangesPage } from './show-water-changes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowWaterChangesPageRoutingModule
  ],
  declarations: [ShowWaterChangesPage]
})
export class ShowWaterChangesPageModule {}
