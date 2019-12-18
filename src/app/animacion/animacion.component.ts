import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../service/calculo.service';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { SimuService } from '../service/simu.service';
import { Acusado } from '../shared/models/acusado';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})

export class AnimacionComponent implements OnInit {
  simu$: Observable<Simulacion[]>;
  simu: Simulacion[];
  si = {
      allanamiento:0,    
      amenaza:0, 
      asesinato:0, 
      conduccionPel:0,
      estafa:0,
      numJueces:0, 
      numSalas:0, 
      otros:0,
      porAntecedentes:0, 
      porDenuncia:0,
      robo:0, 
      violaciones:0,
     };
  acus={
    id:'1',
    Cargos:'robo',
    Gravedad:true, 
    Antecedentes:true,
    Policica_fiscal:true,
   }
  constructor(private calSimu: CalculoService, private simuService: SimuService) { }
  acusados:Acusado[];
  acusado:Acusado;
  ngOnInit() {
    this.simu$ = this.simuService.getSimulaciones();
    this.simu$.subscribe(simu => {
      this.simu = simu;
    });
  }
  prueba() {
    this.crearPolicia('poli');
    
  }
  pruebaF() {
    this.getAcusados();
    this.eliminar('poli');
  }
  pruebamover() {
    this.iniSimu(this.acus);
    //this.moverPolicia('poli');
    //this.moverFiscal('poli');
    //this.moverInvestigar('poli');
    //this.moverObjecion('poli');
    //this.moverFiscal('poli');
    //this.moverComplementacion('poli');
    //this.moverImputacion('poli');
    //this.moverSobresimiento('poli');
    //this.moverSalAlt('poli');
    //this.moverSuspencion('poli');
    //this.moverProAbre('poli');
    //this.moverConciliacion('poli');
    //this.moverJuicio('poli');
    //this.moverSentencia('poli');
    //this.moverApelacion('poli');
    //this.moverCasacion('poli');
  }
  crearPolicia(id: string) {
    var para = document.createElement("img");
    para.src = "../../assets/img/randy.png";
    para.width = 100;
    para.id = id;
    para.style.position = 'absolute';
    para.style.left = 140 + 'px';
    para.style.top = 550 + 'px';
    document.getElementById("div_img").appendChild(para);
  }
  crearFiscal(id: string) {
    var para = document.createElement("img");
    para.src = "../../assets/img/randy.png";
    para.width = 100;
    para.id = id;
    para.style.position = 'absolute';
    para.style.left = 140 + 'px';
    para.style.top = 900 + 'px';
    document.getElementById("div_img").appendChild(para);
  }
  eliminar(id:string){
    var img=document.getElementById(id);
    document.getElementById('div_img').removeChild(img);
  }
  mover(id_img: string, x: number, y: number, xFin: number, yFin: number) {
    var img = document.getElementById(id_img);
    var posx = x;
    var posy = y;
    var id = setInterval(frame, 1);
    function frame() {
      if (posx == xFin) {
        clearInterval(id);
      }
      else {
        if (x < xFin) {
          posx++;
          img.style.left = posx + 'px';
        }
        else {
          posx--;
          img.style.left = posx + 'px';
        }
      }
      if (posy == yFin) {
        clearInterval(id);
      } else {
        if (y < yFin) {
          posy++;
          img.style.top = posy + 'px';
        }
        else {
          posy--;
          img.style.top = posy + 'px';
        }
      }
    }
  }
  moverHor(id_img: string, x: number, xFin) {
    var img = document.getElementById(id_img);
    var posx = x;
    var id = setInterval(frame, 1);
    function frame() {
      if (posx == xFin) {
        clearInterval(id);
      } else {
        if (x < xFin) {
          posx++;
          img.style.left = posx + 'px';
        }
        else {
          posx--;
          img.style.left = posx + 'px';
        }
      }
    }
  }
  moverVer(id_img: string, y: number, yFin) {
    var img = document.getElementById(id_img);
    var posy = y;
    var id = setInterval(frame, 1);
    function frame() {
      if (posy == yFin) {
        clearInterval(id);
      } else {
        if (y < yFin) {
          posy++;
          img.style.top = posy + 'px';
        }
        else {
          posy--;
          img.style.top = posy + 'px';
        }
      }
    }
  }
  moverPolicia(id: string) {
    this.mover(id, 140, 550, 400, 700);
  }
  moverFis(id: string) {
    this.mover(id, 140, 900, 400, 700);
  }
  moverInvestigar(id: string) {
    this.moverHor(id, 330, 450);
  }
  moverObjecion(id: string) {
    this.mover(id, 450, 700, 1000, 550);
  }
  moverFiscal(id: string) {
    this.mover(id, 450, 700, 650, 900);
  }
  moverComplementacion(id: string) {
    this.moverHor(id, 670, 1000);
  }
  moverImputacion(id: string) {
    this.mover(id, 650, 900, 900, 1150);
  }
  moverSobresimiento(id: string) {
    this.moverVer(id, 900, 1150);
  }
  moverSalAlt(id: string) {
    this.mover(id, 650, 900, 420, 1150);
  }
  moverSuspencion(id: string) {
    this.mover(id, 420, 1150, 100, 1400);
  }
  moverProAbre(id: string) {
    this.moverVer(id, 1150, 1400);
  }
  moverConciliacion(id: string) {
    this.mover(id, 420, 1150, 750, 1400);
  }
  moverJuicio(id: string) {
    this.moverVer(id, 1150, 1400);
  }
  moverSentencia(id: string) {
    this.moverVer(id, 1400, 1700);
  }
  moverApelacion(id: string) {
    this.moverHor(id, 1000, 670);
  }
  moverCasacion(id: string) {
    this.moverHor(id, 670, 370);
  }

  random() {
    return Math.random() * 3;
  }
  iniSimu(acu:Acusado) {
    if (acu.Policica_fiscal) {
      this.crearFiscal(acu.id);
    } else {
      this.crearPolicia(acu.id);
    }

    setTimeout(() => {
      if (acu.Policica_fiscal) {
        this.moverFis(acu.id);
      } else {
        this.moverPolicia(acu.id);
      }
    }, 1000);
    setTimeout(() => {
      this.moverInvestigar(acu.id);
    }, 2000);
    setTimeout(() => {
      if(0.5<Math.random()){
        this.moverObjecion(acu.id);
        setTimeout(() => {
          this.eliminar(acu.id);
        }, 1000);
      }
      else{
        this.moverFiscal(acu.id);
        setTimeout(() => {
          if(!(acu.Antecedentes&&acu.Gravedad)&&(Math.random()<0.5)){
            this.moverSobresimiento(acu.id);
            setTimeout(() => {
              this.eliminar(acu.id);
            }, 1000);
          }
          else if(!(acu.Antecedentes&&acu.Gravedad)){
            this.moverSalAlt(acu.id);
            setTimeout(() => {
              var suerte=Math.random();
              if(suerte<0.3){
                this.moverSuspencion(acu.id);
                setTimeout(() => {
                  this.eliminar(acu.id);
                }, 1000);
              }
              else if(suerte<0.6){
                this.moverProAbre(acu.id);
                setTimeout(() => {
                  this.eliminar(acu.id);
                }, 1000);
              }
              else{
                this.moverConciliacion(acu.id);
                setTimeout(() => {
                  this.eliminar(acu.id);
                }, 1000);
              }
            }, 1000);
          }
          else if(Math.random()<0.5){
            this.moverComplementacion(acu.id);
            setTimeout(() => {
              this.eliminar(acu.id);
            }, 1000);
          }
          else{
            this.moverImputacion(acu.id);
            setTimeout(() => {
              this.moverJuicio(acu.id);
            }, 1000);
            setTimeout(() => {
              this.moverSentencia(acu.id);
            }, 2000);
            setTimeout(() => {
              if(Math.random()<0.5){
                setTimeout(() => {
                  this.moverApelacion(acu.id);
                }, 1000);
                if(Math.random()<0.5){
                  setTimeout(() => {
                    this.moverCasacion(acu.id);
                  }, 1000);
                }
                else{
                  setTimeout(() => {
                    this.eliminar(acu.id);
                  }, 1000);
                }
              }
              else{
                setTimeout(() => {
                  this.eliminar(acu.id);
                }, 1000);
              }
            }, 3000);
          }
        }, 1000);
      }
    }, 3000);
    
  }
  getAcusados(){
    this.si.allanamiento=parseInt(document.getElementById('allanamiento').textContent);
    this.si.amenaza=parseInt(document.getElementById('amenaza').textContent);
    this.si.asesinato=parseInt(document.getElementById('asesinato').textContent);
    this.si.conduccionPel=parseInt(document.getElementById('conduccionPel').textContent);
    this.si.estafa=parseInt(document.getElementById('estafa').textContent);
    this.si.numJueces=parseInt(document.getElementById('numJueces').textContent);
    this.si.numSalas=parseInt(document.getElementById('numSalas').textContent);
    this.si.otros=parseInt(document.getElementById('otros').textContent);
    this.si.porDenuncia=parseInt(document.getElementById('porDenuncia').textContent);
    this.si.porAntecedentes=parseInt(document.getElementById('porAntecedentes').textContent);
    this.si.robo=parseInt(document.getElementById('robo').textContent);
    this.si.violaciones=parseInt(document.getElementById('violaciones').textContent);
    console.log(this.si);
  }
}

