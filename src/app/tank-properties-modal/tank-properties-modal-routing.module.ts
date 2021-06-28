import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankPropertiesModalPage } from './tank-properties-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TankPropertiesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankPropertiesModalPageRoutingModule {}
