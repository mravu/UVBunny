import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BunnyDetailComponent } from './components/bunny-detail/bunny-detail.component';

export const routes: Routes = [
   { path:'', component: MainPageComponent},
   {path: "bunny/:id", component: BunnyDetailComponent}
];
