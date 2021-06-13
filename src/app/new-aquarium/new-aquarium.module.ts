import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAquariumPageRoutingModule } from './new-aquarium-routing.module';

import { NewAquariumPage } from './new-aquarium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAquariumPageRoutingModule
  ],
  declarations: [NewAquariumPage]
})
export class NewAquariumPageModule {}
