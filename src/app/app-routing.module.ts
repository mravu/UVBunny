import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BunnyDetailComponent } from './components/bunny-detail/bunny-detail.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'bunny/:id', component: BunnyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
