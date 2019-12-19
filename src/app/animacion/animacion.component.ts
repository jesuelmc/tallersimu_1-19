import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../service/calculo.service';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { SimuService } from '../service/simu.service';
import { Acusado } from '../shared/models/acusado';
import { ResAcusado } from '../shared/models/resulAcusado';
import { ResulSimu } from '../shared/models/resulSimu';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})

export class AnimacionComponent implements OnInit {
  simu$: Observable<Simulacion[]>;
  resulSimu$:Observable<ResAcusado[]>;
  simu: Simulacion[];
  resSimu$:Observable<ResAcusado[]>;
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
  resAcusados:ResAcusado[]=[];
  resAcu:ResAcusado[]=[];
  constructor(private calSimu: CalculoService, private simuService: SimuService) { }
  acusados:Acusado[]=[];
  ngOnInit() {
    this.simu$ = this.simuService.getSimulaciones();
    this.simu$.subscribe(simu => {
      this.simu = simu;
    });
    this.resSimu$ = this.simuService.getResulAcu();
    this.resSimu$.subscribe(acu => {
      this.resAcu = acu;
    });
  }
  prueba() {
    console.log(this.resAcu);
    
  }
  correrSimu() {
    this.getDatosSimu();
    this.getAcusados();
    //console.log(this.acusados);
    this.recIni(0);
    
  }
  recIni(pos:number){
    if(pos<this.acusados.length){
      setTimeout(() => {
        this.iniSimu(this.acusados[pos]);
        this.recIni(pos+1);
      }, 1000);
    }
  }
  mosResul() {
    this.cargarResul();
    setTimeout(() => {
      this.resulSimu$ = this.simuService.getResulAcu();
    }, 3000);
    //console.log(this.resAcusados);
    //this.iniSimu(this.acus);
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
  cargarResul(){
    var i=0;
      while(i<this.resAcusados.length){
      this.simuService.updateResul(this.resAcusados[i],i);
      i++;
    }
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
    console.log(id);
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
          posx+=5;
          img.style.left = posx + 'px';
        }
        else {
          posx-=5;
          img.style.left = posx + 'px';
        }
      }
      if (posy == yFin) {
        clearInterval(id);
      } else {
        if (y < yFin) {
          posy+=5;
          img.style.top = posy + 'px';
        }
        else {
          posy-=5;
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
          posx+=5;
          img.style.left = posx + 'px';
        }
        else {
          posx-=5;
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
          posy+=5;
          img.style.top = posy + 'px';
        }
        else {
          posy-=5;
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
    console.log(acu);
    var resAcu={
      cargos:acu.Cargos,
      denuncia:1,
      investigacion:0,
      objecion:0,
      complementacion:0,
      salAlt:0,
      rechazo:0,
      conciliacion:0,
      procAbre:0,
      suspencion:0,
      juicio:0,
      apelacion:0,
      casacion:0,
    }
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
    }, 500);
    resAcu.investigacion=Math.floor(Math.random() * 2);
    setTimeout(() => {
      this.moverInvestigar(acu.id);
    }, 1000);
    setTimeout(() => {
      if(0.8<Math.random()){
        this.moverObjecion(acu.id);
        resAcu.objecion=Math.floor(Math.random() * 3);
        setTimeout(() => {
          this.resAcusados.push(resAcu);
          this.eliminar(acu.id);
        }, 500);
      }
      else{
        this.moverFiscal(acu.id);
        setTimeout(() => {
          if(!(acu.Antecedentes&&acu.Gravedad)&&(Math.random()<0.35)){
            resAcu.rechazo=Math.floor(Math.random() * 12);
            this.moverSobresimiento(acu.id);
            setTimeout(() => {
              this.resAcusados.push(resAcu);
              this.eliminar(acu.id);
            }, 500);
          }
          else if(!(acu.Antecedentes&&acu.Gravedad)&&(Math.random()<0.20)){
            resAcu.salAlt=Math.floor(Math.random() * 1);
            this.moverSalAlt(acu.id);
            setTimeout(() => {
              var suerte=Math.random();
              if(suerte<0.3){
                resAcu.suspencion=Math.floor(Math.random() * 1);
                this.moverSuspencion(acu.id);
                setTimeout(() => {
                  this.resAcusados.push(resAcu);
                  this.eliminar(acu.id);
                }, 500);
              }
              else if(suerte<0.6){
                resAcu.procAbre=Math.floor(Math.random() * 2);
                this.moverProAbre(acu.id);
                setTimeout(() => {
                  this.resAcusados.push(resAcu);
                  this.eliminar(acu.id);
                }, 500);
              }
              else{
                resAcu.conciliacion=Math.floor(Math.random() * 4);
                this.moverConciliacion(acu.id);
                setTimeout(() => {
                  this.resAcusados.push(resAcu);
                  this.eliminar(acu.id);
                }, 500);
              }
            }, 500);
          }
          else if(Math.random()<0.85){
            resAcu.complementacion=Math.floor(Math.random() * 10);
            this.moverComplementacion(acu.id);
            setTimeout(() => {
              this.resAcusados.push(resAcu);
              this.eliminar(acu.id);
            }, 500);
          }
          else{
            this.moverImputacion(acu.id);
            setTimeout(() => {
              this.moverJuicio(acu.id);
            }, 500);
            setTimeout(() => {
              resAcu.juicio=Math.floor(Math.random() * 70);
              this.moverSentencia(acu.id);
            }, 1000);
            setTimeout(() => {
              if(Math.random()<0.5){
                setTimeout(() => {
                  resAcu.apelacion=resAcu.juicio=25+Math.floor(Math.random() * 25);
                  this.moverApelacion(acu.id);
                }, 500);
                if(Math.random()<0.5){
                  setTimeout(() => {
                    resAcu.casacion=resAcu.juicio=10+Math.floor(Math.random() * 12);
                    this.moverCasacion(acu.id);
                    setTimeout(() => {
                      this.resAcusados.push(resAcu);
                      this.eliminar(acu.id);
                    }, 500);
                  }, 500);
                }
                else{
                  setTimeout(() => {
                    this.resAcusados.push(resAcu);
                    this.eliminar(acu.id);
                  }, 500);
                }
              }
              else{
                setTimeout(() => {
                  this.resAcusados.push(resAcu);
                  this.eliminar(acu.id);
                }, 500);
              }
            }, 1500);
          }
        }, 500);
      }
    }, 1500);
    
  }
  getDatosSimu(){
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
  }
  getAcusados(){
    var Id=0;
     for(var i=0;i<this.si.allanamiento;i++){
       var acus={
       id:Id+"",
       Cargos:'allanamiento',
       Gravedad:(Math.random()<0.5),
       Antecedentes:(this.si.porAntecedentes<Math.random()*100),
       Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
       }
       this.acusados.push(acus);
       Id++;
     }
     for(var i=0;i<this.si.amenaza;i++){
      var acus={
        id:Id+"",
        Cargos:'amenaza',
        Gravedad:false,
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
    for(var i=0;i<this.si.asesinato;i++){
      var acus={
        id:Id+"",
        Cargos:'asesinato',
        Gravedad:true,
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
    for(var i=0;i<this.si.conduccionPel;i++){
      var acus={
        id:Id+"",
        Cargos:'conduccionPel',
        Gravedad:true,
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
    for(var i=0;i<this.si.estafa;i++){
      var acus={
        id:Id+"",
        Cargos:'estafa',
        Gravedad:(Math.random()<0.5),
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
    for(var i=0;i<this.si.otros;i++){
      var acus={
        id:Id+"",
        Cargos:'otros',
        Gravedad:false,
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
    for(var i=0;i<this.si.robo;i++){
      var acus={
        id:Id+"",
        Cargos:'robo',
        Gravedad:(Math.random()<0.5),
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
    for(var i=0;i<this.si.violaciones;i++){
      var acus={
        id:Id+"",
        Cargos:'violaciones',
        Gravedad:true,
        Antecedentes:(this.si.porAntecedentes<Math.random()*100),
        Policica_fiscal:(this.si.porDenuncia<Math.random()*100),
        }
      this.acusados.push(acus);
      Id++;
    }
  }
}

