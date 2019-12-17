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
 
   otro(){
  var para = document.createElement("img");                 // Create a <p> element
  para.src="../../assets/img/randy.png";                // Insert text
  para.width=100;
  para.id='img';
  para.style.position='absolute';
  para.style.left = 100+'px';
  document.getElementById("div_img").appendChild(para);
   }
   rigth(){
    var img=document.getElementById('img');
    var pos = 100;
      var id = setInterval(frame, 10);
      function frame() {
        if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;  
        img.style.left = pos + 'px'; 
      }
    }
   }
}

