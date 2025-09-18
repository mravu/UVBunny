import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bunny-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bunny-detail.component.html',
  styleUrl: './bunny-detail.component.css'
})
export class BunnyDetailComponent implements OnInit {
  bunnyId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.bunnyId = this.route.snapshot.paramMap.get('id')!;
    // Load bunny data here
  }
}