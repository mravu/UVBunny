import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BunnyService } from '../../services/bunny.service';
import { Config } from '../../model/bunnyModel';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-config-page',
  standalone: true,
  imports: [CommonModule, RouterModule,MaterialModule, FormsModule],
  templateUrl: './config-page.component.html',
  styleUrl: './config-page.component.css'
})
export class ConfigPageComponent implements OnInit{
  current!: Config;

  constructor(
    private route: ActivatedRoute,
    private bunnyService: BunnyService
  ) {}

  ngOnInit() {
    this.bunnyService.getConfig().subscribe(c => 
      {
      if(!c){
          this.current =  {lettucePoints : 1, carrotPoints :3, playPoints : 2, playBonusPoints : 4};
      }else{this.current = c
      }     
    });
  }

  save() {
    this.bunnyService.setConfig(this.current);
  }
}
