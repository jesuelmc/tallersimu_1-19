import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { ResAcusado } from '../shared/models/resulAcusado';
import { ResulSimu } from '../shared/models/resulSimu';


@Injectable({
  providedIn: 'root'
})
export class SimuService {
  simuCollection: AngularFirestoreCollection<Simulacion>;
  resulAcusados: AngularFirestoreCollection<ResAcusado>;
  resulSimu: AngularFirestoreCollection<ResulSimu>
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
    updateResul(resul:ResAcusado,id:number){
      this.resulAcusados.doc(id+"").set(resul);
    }
    getResulAcu(){
      return this.db.collection<ResAcusado>('resulAcu').valueChanges();
    }
    updateResulSimu(resul:ResulSimu,cargo:string){
      this.resulAcusados.doc(cargo).set(resul);
    }
    getResulSimu(){
      return this.db.collection<ResulSimu>('resulSimu').valueChanges();
    }
    
   
}
