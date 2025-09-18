import { Component } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Import the standalone component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UVBunny';
}