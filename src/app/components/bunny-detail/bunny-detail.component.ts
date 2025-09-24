import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { BunnyService } from '../../services/bunny.service';
import { Bunny, Config, Events } from '../../model/bunnyModel';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Firestore, Timestamp, doc, getFirestore, updateDoc } from '@angular/fire/firestore';




@Component({
  selector: 'app-bunny-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './bunny-detail.component.html',
  styleUrls: ['./bunny-detail.component.css']
})
export class BunnyDetailComponent implements OnInit {
  bunnyId!: string;
  bunny!: Bunny;
  bunnyEvents: Events[] = [];
  config!: Config;
  newEvent = {
    type: 'eating' as 'eating' | 'playing',
    detail: ''
  };
  dropdownOptions: string[] = [];
   allBunnies: any[] = [];
  private firebaseApp = inject(FirebaseApp);
  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    private bunnyService: BunnyService
  ) {}

  ngOnInit() {
    this.bunnyId = this.route.snapshot.paramMap.get('id')!;
    this.bunnyService.getBunnyById(this.bunnyId).subscribe(b => this.bunny = b);
    this.bunnyService.getEvents(this.bunnyId).subscribe(e => this.bunnyEvents = e);
    this.bunnyService.getConfig().subscribe(c => this.config = c);
    this.bunnyService.getBunnies().subscribe(data => {
      this.allBunnies = data;
      });
    this.onTypeChange();
  }

  onTypeChange() {
    if (this.newEvent.type === 'eating') {
      this.dropdownOptions = ['carrot', 'lettuce'];
    } else if (this.newEvent.type === 'playing') {
      this.dropdownOptions = this.allBunnies
        .filter(b => b.id !== this.bunnyId)
        .map(b => b.name);
    }
  }

 

  async submitEvent() {
    let points = 0;
  
    if (this.newEvent.type === 'eating') {
      if (this.newEvent.detail === 'carrot') {
        points = this.config.carrotPoints;
      } else if (this.newEvent.detail === 'lettuce') {
        points = this.config.lettucePoints;
      } else {
        console.warn('Unknown food type:', this.newEvent.detail);
      }
    } else if (this.newEvent.type === 'playing') {
      points = this.config.playPoints;
  
      const playedBefore = this.bunnyEvents.some(e =>
        e.type === 'playing' && e.detail === this.newEvent.detail
      );
  
      if (playedBefore) {
        points += this.config.playBonusPoints; // Bonus for repeat playmate
      }
    }
    console.log('Event before added');
    try {
    await this.bunnyService.addEvent({
      bunnyId: this.bunnyId,
      type: this.newEvent.type,
      detail: this.newEvent.detail,
      timestamp: Timestamp.fromDate(new Date()),
      id: '',
      points
    });
    console.log('Event added. Updating happiness…');
    await this.bunnyService.updateHappiness(this.bunnyId, this.bunny.hapiness + points);
    console.log('Event added. Updating happiness…  after');
    this.newEvent.detail = '';
  } catch (error) {
    console.error('Error submitting event:', error);
  }
  }

  async uploadAvatar(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    try {
      const url = await this.bunnyService.uploadAvatar(file);
      this.bunny.avatar = url;

      // Save to Firestore
      const bunnyRef = doc(this.firestore, `bunnies/${this.bunnyId}`);
      await updateDoc(bunnyRef, { avatar: url });

      console.log('Avatar saved at:', url);
    } catch (error) {
      console.error('Upload failed:', error);
    } 
  }
    
}

