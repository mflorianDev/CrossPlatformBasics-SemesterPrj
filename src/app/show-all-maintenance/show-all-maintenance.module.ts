import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowAllMaintenancePageRoutingModule } from './show-all-maintenance-routing.module';

import { ShowAllMaintenancePage } from './show-all-maintenance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowAllMaintenancePageRoutingModule
  ],
  declarations: [ShowAllMaintenancePage]
})
export class ShowAllMaintenancePageModule {}
