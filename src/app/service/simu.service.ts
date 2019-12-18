import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { ResAcusado } from '../shared/models/resulAcusado';


@Injectable({
  providedIn: 'root'
})
export class SimuService {
  simuCollection: AngularFirestoreCollection<Simulacion>;
  resulAcusados: AngularFirestoreCollection<ResAcusado>;
  constructor(private db: AngularFirestore ) {
    this.simuCollection = db.collection<Simulacion>('simulacion');
    this.resulAcusados= db.collection<ResAcusado>('resulAcu');
  }
    getSimulaciones(): Observable<Simulacion[]> {
      return this.db.collection<Simulacion>('simulacion').valueChanges();
    }
    updateSimu(simu:Simulacion){
      this.simuCollection.doc("simulacion").set(simu);
    }
    updateResul(resul:ResAcusado){
      this.resulAcusados.add(resul);
    }
    
   
}
