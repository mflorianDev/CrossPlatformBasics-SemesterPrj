import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankPropertiesChangesPageRoutingModule } from './tank-properties-changes-routing.module';

import { TankPropertiesChangesPage } from './tank-properties-changes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankPropertiesChangesPageRoutingModule
  ],
  declarations: [TankPropertiesChangesPage]
})
export class TankPropertiesChangesPageModule {}
