import { Component, OnInit } from '@angular/core';
import { BunnyService } from '../../services/bunny.service';
import { Bunny } from '../../model/bunnyModel';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,MaterialModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent  implements OnInit{
  bunnies: Bunny[] = [];
  averageHappiness : number = 0;
  newBunny = {id:'', name :'', hapiness:0, avatar:''}

  constructor(private router: Router, private bunnyService: BunnyService) {}

  ngOnInit() {
    this.bunnyService.getBunnies().subscribe(data => {
      this.bunnies = data;
      this.calculateAverageHappiness();
    });
  }
  calculateAverageHappiness() {
    if (this.bunnies.length === 0) {
      this.averageHappiness = 0;
      return;
    }
    const total = this.bunnies.reduce((sum, b) => sum + b.hapiness, 0);
    this.averageHappiness = Math.round(total / this.bunnies.length);
  }

  addBunny() {
    const newBunny: Bunny = this.newBunny;
    this.bunnyService.addBunny(this.newBunny.name).then(() => {
      this.newBunny.name = '';
    });
  }

  goToBunnyDetails(id:string){
this.router.navigate(['/bunny',id])
  }

}
