import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BunnyDetailComponent } from './components/bunny-detail/bunny-detail.component';

const routes: Routes = [
    {
        path: 'bunny/:id',
        loadComponent: () =>
          import('./components/bunny-detail/bunny-detail.component').then(m => m.BunnyDetailComponent)
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
