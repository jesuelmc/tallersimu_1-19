import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../service/calculo.service';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { SimuService } from '../service/simu.service';
let x:number;
@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})

export class AnimacionComponent implements OnInit {
  simu$:Observable<Simulacion[]>;
  simu:Simulacion[];
  
  constructor(private calSimu:CalculoService, private simuService:SimuService) { }

  ngOnInit() {
    this.simu$=this.simuService.getSimulaciones();
    this.simu$.subscribe(simu=>{
      this.simu=simu;
    });
  }
   prueba(){
     this.crearPolicia('poli');
   }
   pruebaF(){
    this.crearFiscal('fis');
  }
   pruebamover(){
    this.moverPolicia('poli');
    this.moverFiscal('poli');
  }
   crearPolicia(id:string){
    var para = document.createElement("img");
    para.src="../../assets/img/randy.png";  
    para.width=100;
    para.id=id;
    para.style.position='absolute';
    para.style.left = 140+'px';
    para.style.top = 450+'px';
    document.getElementById("div_img").appendChild(para);
   }
   crearFiscal(id:string){
    var para = document.createElement("img");
    para.src="../../assets/img/randy.png";
    para.width=100;
    para.id=id;
    para.style.position='absolute';
    para.style.left = 140+'px';
    para.style.top = 800+'px';
    document.getElementById("div_img").appendChild(para);
   }
   mover(id_img:string,x:number,y:number,xFin:number,yFin:number){
    var img=document.getElementById(id_img);
    var posx = x;
    var posy = y;
    var id = setInterval(frame, 1);
    function frame() {
      if (posx == xFin) {
        clearInterval(id);
      }
      else {
        if(x<xFin){
          posx++;  
          img.style.left = posx + 'px'; 
        }
        else{
          posx--;  
          img.style.left = posx + 'px'; 
        }  
      }
      if (posy == yFin) {
        clearInterval(id);
      } else {
        if(y<yFin){
          posy++;  
          img.style.top = posy + 'px'; 
        }
        else{
          posy--;  
          img.style.top = posy + 'px'; 
        }
      }
    }
   }
   moverPolicia(id:string){
    this.mover(id,140,450,400,600);
   }
   moverFiscal(id:string){
    this.mover(id,140,800,400,600);
   }
}

