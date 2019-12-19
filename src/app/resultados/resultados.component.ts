import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { SimuService } from '../service/simu.service';
import { ResAcusado } from '../shared/models/resulAcusado';
import { Observable } from 'rxjs';
import * as html2canvas from 'html2canvas';
import { ResulSimu } from '../shared/models/resulSimu';
import { ResTotal } from '../shared/models/resTotal';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  resSimu:ResulSimu[]=[];
  resTotales:ResTotal[]=[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Tiempo promedio (DIA)'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [0], label: 'robo' },
    { data: [0], label: 'allanamiento' },
    { data: [0], label: 'amenaza' },
    { data: [0], label: 'asesinato' ,backgroundColor: "rgba(35,75,212,1)"},
    { data: [0], label: 'conduccionPel' },
    { data: [0], label: 'estafa' },
    { data: [0], label: 'violaciones',backgroundColor: "rgba(65,55,112,1)"},
    { data: [0], label: 'otros' }
  ];

  constructor(private simuService:SimuService) { }
  resulAcu$:Observable<ResAcusado[]>;
  resulAcu:ResAcusado[]=[];
  ngOnInit() {
    this.resulAcu$=this.simuService.getResulAcu();
    this.resulAcu$.subscribe(acu => {
      this.resulAcu = acu;
    });
    setTimeout(() => {
      this.llenarRes();
      console.log(this.resSimu);
      console.log(this.resTotales);
      this.cargarDatos();
    }, 3000);
  }
  downloadImage(){
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
  probar(){
    console.log(this.resulAcu);
    this.llenarRes();
    console.log(this.resSimu);
    console.log(this.resTotales);
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    // const data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   (Math.random() * 100),
    //   56,
    //   (Math.random() * 100),
    //   40];
    // this.barChartData[0].data = data;
  }
  cargarDatos(){
    var i=0;
    while(i<this.resTotales.length){
      var j=0;
      while(j<this.barChartData.length){
        if(this.resTotales[i].cargo==this.barChartData[j].label){
          var data=[this.resTotales[i].tiempo];
          this.barChartData[j].data=data;
        }
        j++;
      }
      i++;
    }
    console.log(this.barChartData);
  }
  llenarRes(){
    this.llenar("robo");
    this.llenar("allanamiento");
    this.llenar("amenaza");
    this.llenar("asesinato");
    this.llenar("conduccionPel");
    this.llenar("estafa");
    this.llenar("otros");
    this.llenar("violaciones");
  }
  llenar(cargo){
    var resAcu={
      cargos:"",
      denuncia:0,
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
    var cant=0;
    var i=0;
    while(i<this.resulAcu.length){
      if(cargo==this.resulAcu[i].cargos){
        cant++;
        resAcu.cargos=cargo;
        resAcu.denuncia+=this.resulAcu[i].denuncia;
        resAcu.investigacion+=this.resulAcu[i].investigacion;
        resAcu.objecion+=this.resulAcu[i].objecion;
        resAcu.complementacion+=this.resulAcu[i].complementacion;
        resAcu.salAlt+=this.resulAcu[i].salAlt;
        resAcu.rechazo+=this.resulAcu[i].rechazo;
        resAcu.conciliacion+=this.resulAcu[i].conciliacion;
        resAcu.procAbre+=this.resulAcu[i].procAbre;
        resAcu.suspencion+=this.resulAcu[i].suspencion;
        resAcu.juicio+=this.resulAcu[i].juicio;
        resAcu.apelacion+=this.resulAcu[i].apelacion;
        resAcu.casacion+=this.resulAcu[i].casacion;
      }
      
      i++;
    }
    if(cant>0){
        resAcu.denuncia=resAcu.denuncia/cant;
        resAcu.investigacion=resAcu.investigacion/cant;
        resAcu.objecion=resAcu.objecion/cant;
        resAcu.complementacion=resAcu.complementacion/cant;
        resAcu.salAlt=resAcu.salAlt/cant;
        resAcu.rechazo=resAcu.rechazo/cant;
        resAcu.conciliacion=resAcu.conciliacion/cant;
        resAcu.procAbre=resAcu.procAbre/cant;
        resAcu.suspencion=resAcu.suspencion/cant;
        resAcu.juicio=resAcu.juicio/cant;
        resAcu.apelacion=resAcu.apelacion/cant;
        resAcu.casacion=resAcu.casacion/cant; 
      this.resSimu.push(resAcu);
      var resTot={
        cargo:cargo,
        tiempo:0,
      }
      resTot.tiempo=resAcu.denuncia+ resAcu.investigacion+resAcu.objecion+resAcu.complementacion+resAcu.salAlt+resAcu.rechazo+resAcu.conciliacion+resAcu.procAbre+resAcu.suspencion+resAcu.juicio+resAcu.apelacion+resAcu.casacion;
      this.resTotales.push(resTot);
    }
    
  }
}
