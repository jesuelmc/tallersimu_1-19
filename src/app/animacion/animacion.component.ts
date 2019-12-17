import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../service/calculo.service';
import { Observable } from 'rxjs';
import { Simulacion } from '../shared/models/simulacion';
import { SimuService } from '../service/simu.service';
import { Acusado } from '../shared/models/acusado';
let x: number;
@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})

export class AnimacionComponent implements OnInit {
  simu$: Observable<Simulacion[]>;
  simu: Simulacion[];
  acu:Acusado;
  constructor(private calSimu: CalculoService, private simuService: SimuService) { }

  ngOnInit() {
    this.simu$ = this.simuService.getSimulaciones();
    this.simu$.subscribe(simu => {
      this.simu = simu;
    });
    this.acu.id='1';
    this.acu.Policica_fiscal=true;
  }
  prueba() {
    this.crearPolicia('poli');
  }
  pruebaF() {
    this.moverFiscal('poli');
  }
  pruebamover() {
    this.iniSimu(this.acu);
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
  }
}

