import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet, NavigationEnd} from '@angular/router';
import { TabLayoutComponent } from './components/tab-layout/tab-layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ConfigPageComponent } from './components/config-page/config-page.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    MatTabsModule,
    RouterModule,
    MainPageComponent,
    ConfigPageComponent], // Import the standalone component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  selectedTabIndex = 0;
  showTabs = true;

  constructor(private router: Router) {}


  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    const path = index === 1 ? 'config' : 'main';
    this.router.navigate([`/${path}`]);
  }
}