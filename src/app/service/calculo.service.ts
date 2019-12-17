import { Injectable } from '@angular/core';
import { SimuService } from './simu.service';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { Acusado } from '../shared/models/acusado';


@Injectable({
  providedIn: 'root'
})
export class CalculoService {
  constructor(private simuService:SimuService) { }
  acusados:Acusado[];
  acusado:Acusado;
  prueba(){
   
  }
  crearAcusados(){
    //allanamiento
    while(1>0){
      this.acusado.Antecedentes=this.calcularValor(1);
      this.acusado.Cargos='allanamiento';
      this.acusado.Gravedad=false;
      this.acusado.Policica_fiscal=this.calcularValor(1);
      this.acusados.push(this.acusado);
    }
    console.log(this.acusados);
  }
  calcularValor(valor:number){
    var randon=Math.random()*100;
    if(randon<valor){
      return true;
    }
    else{
      return false;
    }
  }


}
