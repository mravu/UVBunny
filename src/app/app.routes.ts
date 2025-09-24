import { Routes } from '@angular/router';



export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', loadComponent: () => import('./components//main-page/main-page.component').then(m => m.MainPageComponent) },
    { path: 'config', loadComponent: () => import('./components/config-page/config-page.component').then(m => m.ConfigPageComponent) },
    { path: 'bunny/:id', loadComponent: () => import('./components/bunny-detail/bunny-detail.component').then(m => m.BunnyDetailComponent) }
  ];
