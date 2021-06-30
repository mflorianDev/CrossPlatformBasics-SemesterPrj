import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'new-aquarium',
    loadChildren: () => import('./new-aquarium/new-aquarium.module').then( m => m.NewAquariumPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./maintenance/maintenance.module').then( m => m.MaintenancePageModule)
  },
  {
    path: 'show-all-maintenance',
    loadChildren: () => import('./show-all-maintenance/show-all-maintenance.module').then( m => m.ShowAllMaintenancePageModule)
  },
  {
    path: 'show-water-changes',
    loadChildren: () => import('./show-water-changes/show-water-changes.module').then( m => m.ShowWaterChangesPageModule)
  },
  {
    path: 'tank-properties',
    loadChildren: () => import('./tank-properties/tank-properties.module').then( m => m.TankPropertiesPageModule)
  },
  {
    path: 'tank-properties-changes',
    loadChildren: () => import('./tank-properties-changes/tank-properties-changes.module').then( m => m.TankPropertiesChangesPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
