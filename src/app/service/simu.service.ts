import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';

@Injectable({
  providedIn: 'root'
})
export class SimuService {
  simuCollection: AngularFirestoreCollection<Simulacion>;

  constructor(private db: AngularFirestore) {
    this.simuCollection = db.collection<Simulacion>('simulacion');
  }
    getDenunciantes(): Observable<Simulacion[]> {
      return this.db.collection<Simulacion>('simulacion').valueChanges();
    }
    
    addSimu(nuevoSimu:Simulacion) {
      console.log(nuevoSimu);
      this.simuCollection.add(nuevoSimu);
    }
    updateSimu(simu:Simulacion){
      this.simuCollection.doc("simulacion").set(simu);
    }
    getCollection(){
      return this.db.collection<Simulacion>('simulacion').valueChanges();
    }
}
