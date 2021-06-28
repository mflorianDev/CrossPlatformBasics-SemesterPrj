import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankPropertiesModalPageRoutingModule } from './tank-properties-modal-routing.module';

import { TankPropertiesModalPage } from './tank-properties-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankPropertiesModalPageRoutingModule
  ],
  declarations: [TankPropertiesModalPage]
})
export class TankPropertiesModalPageModule {}
