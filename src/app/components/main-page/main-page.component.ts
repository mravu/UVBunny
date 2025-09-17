import { Component, OnInit } from '@angular/core';
import { BunnyService } from '../../services/bunny.service';
import { Bunny } from '../../model/bunnyModel';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,MaterialModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent  implements OnInit{
  bunnies: Bunny[] = [];
  newBunny = {name :'', hapiness:0, avatar:''}

  constructor(private bunnyService: BunnyService) {}

  ngOnInit(): void {
    this.bunnyService.getBunnies().subscribe(data => {
      this.bunnies = data;
    });
  }

  addBunny(): void {
    const newBunny: Bunny = this.newBunny;
    this.bunnyService.addBunny(newBunny).then(() => {
      console.log('Bunny added successfully');
    }).catch(error => {
      console.error('Error adding bunny: ', error);
    });
  }

}
