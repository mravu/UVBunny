import { Injectable } from "@angular/core";
import { Firestore,  collection,  collectionData , addDoc, query, getDocs, where } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { Bunny } from "../model/bunnyModel";

@Injectable({
  providedIn: 'root'
})
export class BunnyService {
  constructor(private firestore: Firestore) {}

  getBunnies(): Observable<Bunny[]> {
    const bunniesRef = collection(this.firestore, 'bunnies');
    return collectionData(bunniesRef, { idField: 'id' }) as Observable<Bunny[]>;
  }

  addBunny(name: string): Promise<string> {
    const bunny = { name, hapiness: 0 };
    const bunniesRef = collection(this.firestore, 'bunnies');
    return addDoc(bunniesRef, bunny).then(docRef => docRef.id);
  }
  
  getBunnyById(id: string) {
    const eventsRef = collection(this.firestore, 'events');
    const q = query(eventsRef, where('bunnyId', '==', id));
    return getDocs(q);
  }
}