import { Injectable } from "@angular/core";
import { Firestore,  collection,  collectionData , addDoc, query, getDocs, where, onSnapshot, doc, updateDoc, docData, setDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Bunny, Config, Events } from "../model/bunnyModel";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BunnyService {
  constructor(private firestore: Firestore, private storage: Storage) {}

  getBunnies(): Observable<Bunny[]> {
    const bunniesRef = collection(this.firestore, 'bunnies');
    return collectionData(bunniesRef, { idField: 'id' }) as Observable<Bunny[]>;
  }
  

  addBunny(name: string): Promise<string> {
    const bunny = { name, hapiness: 0 };
    const bunniesRef = collection(this.firestore, 'bunnies');
    return addDoc(bunniesRef, bunny).then(docRef => docRef.id);
  }
  
  getBunnyById(id: string): Observable<Bunny> {
    return new Observable(observer => {
      const ref = doc(this.firestore, `bunnies/${id}`);
      onSnapshot(ref, snap => observer.next({ id: snap.id, ...snap.data() } as Bunny));
    });
  }

  getEvents(bunnyId: string): Observable<Events[]> {
    return new Observable(observer => {
      const ref = query(collection(this.firestore, 'events'), where('bunnyId', '==', bunnyId));
      onSnapshot(ref, snap => {
        const events = snap.docs.map(d => d.data() as Events);
        observer.next(events);
      });
    });
  }

  async addEvent(event: Events): Promise<void> {
    await addDoc(collection(this.firestore, 'events'), event);
  }

  updateHappiness(bunnyId: string, newScore: number): Promise<void> {
    const ref = doc(this.firestore, `bunnies/${bunnyId}`);
    return updateDoc(ref, { hapiness: newScore });
  }
  

  async uploadAvatar(file: File): Promise<string> {
    const filePath = `avatars/${uuidv4()}-${file.name}`;
    const storageRef = ref(this.storage, filePath);

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return url;
  }

 
  async getFileUrl(filePath: string): Promise<string> {
    const storageRef = ref(this.storage, filePath);
    return await getDownloadURL(storageRef);
  }
  

  getConfig(): Observable<Config> {
    const d = doc(this.firestore, 'config/global');
    return docData(d) as Observable<Config>;
  }

  async setConfig(newConfig: Config) {
    const d = doc(this.firestore, 'config/global');
    await setDoc(d,newConfig);
  }


}