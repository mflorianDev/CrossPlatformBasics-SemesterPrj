import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankPropertiesPage } from './tank-properties.page';

const routes: Routes = [
  {
    path: '',
    component: TankPropertiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankPropertiesPageRoutingModule {}
