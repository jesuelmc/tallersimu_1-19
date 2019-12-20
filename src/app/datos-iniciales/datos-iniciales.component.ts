import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Demandantes } from '../shared/models/demandantes';
import { SimuService } from '../service/simu.service';
import { Simulacion } from '../shared/models/simulacion';
import { NgForm } from "@angular/forms/src/directives/ng_form";
import { CalculoService } from '../service/calculo.service';
@Component({
  selector: 'app-datos-iniciales',
  templateUrl: './datos-iniciales.component.html',
  styleUrls: ['./datos-iniciales.component.scss']
})
export class DatosInicialesComponent implements OnInit {
  demandantes$: Observable<Demandantes[]>;
  demandantes: Demandantes[];
    allanamiento=true;  
    amenaza=true;
    asesinato=true;
    conduccionPel=true;
    estafa=true;
    robo=true;
    violaciones=true;
  simu:Simulacion={
    allanamiento:0,  
    amenaza:0,
    asesinato:0,
    conduccionPel:0, 
    estafa:0,
    numJueces:10, 
    numSalas:10,
    otros:120, 
    porAntecedentes:50,
    porDenuncia:50,
    robo:0,
    violaciones:0,
  };
  
  constructor(private simuService: SimuService, private calSimu:CalculoService) { }

  ngOnInit() {
  }
  guardarSimu(myForm: NgForm){
    console.log(myForm);
    this.updateDatos();
    this.simuService.updateSimu(this.simu);
  }
  prueba(){
    this.updateDatos();
    this.simuService.updateSimu(this.simu);
  }
  updateDatos(){
    if(this.allanamiento){
      this.simu.allanamiento=Math.floor(Math.random() * 13);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
    if(this.amenaza){
      this.simu.amenaza=Math.floor(Math.random() * 17);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
    if(this.asesinato){
      this.simu.asesinato=Math.floor(Math.random() * 11);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
    if(this.conduccionPel){
      this.simu.conduccionPel=Math.floor(Math.random() * 15);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
    if(this.estafa){
      this.simu.estafa=Math.floor(Math.random() * 10);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
    if(this.robo){
      this.simu.robo=Math.floor(Math.random() * 19);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
    if(this.violaciones){
      this.simu.violaciones=Math.floor(Math.random() * 16);
      this.simu.otros=this.simu.otros-(8+Math.floor(this.calSimu.getAle() * 4));
    }
  }
}
 
