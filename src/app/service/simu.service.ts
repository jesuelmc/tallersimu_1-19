import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';


@Injectable({
  providedIn: 'root'
})
export class SimuService {
  simuCollection: AngularFirestoreCollection<Simulacion>;
  constructor(private db: AngularFirestore ) {
    this.simuCollection = db.collection<Simulacion>('simulacion');
  }
    getSimulaciones(): Observable<Simulacion[]> {
      return this.db.collection<Simulacion>('simulacion').valueChanges();
    }
    updateSimu(simu:Simulacion){
      this.simuCollection.doc("simulacion").set(simu);
    }
   
}
