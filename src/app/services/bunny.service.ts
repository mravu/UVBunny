import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Bunny } from "../model/bunnyModel";

@Injectable({
  providedIn: 'root'
})
export class BunnyService {
  constructor(private firestore: AngularFirestore) {}

  getBunnies(): Observable<any[]> {
    return this.firestore.collection('bunnies').valueChanges();
  }

  addBunny(bunny: Bunny): Promise<any> {
    return this.firestore.collection('bunnies').add(bunny);
  }
  
  getBunnyById(id: string): Observable<Bunny | undefined> {
    return this.firestore.collection<Bunny>('bunnies').doc(id).valueChanges();
  }
}