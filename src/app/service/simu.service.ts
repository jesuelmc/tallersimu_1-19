import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Demandantes } from '../shared/models/demandantes';

@Injectable({
  providedIn: 'root'
})
export class SimuService {
  constructor(private db: AngularFirestore) {}
    getDenunciantes(): Observable<Demandantes[]> {
      return this.db.collection<Demandantes>('demandantes').valueChanges();
    }
}
