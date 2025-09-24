import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-tab-layout',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tab-layout.component.html',
  styleUrl: './tab-layout.component.css'
})
export class TabLayoutComponent {

}
