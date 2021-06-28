import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankPropertiesChangesPage } from './tank-properties-changes.page';

const routes: Routes = [
  {
    path: '',
    component: TankPropertiesChangesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankPropertiesChangesPageRoutingModule {}
