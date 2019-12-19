import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chart.js';
import { SimuService } from '../service/simu.service';
import { ResAcusado } from '../shared/models/resulAcusado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

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
  public barChartLabels: Label[] = ['tiempo promedio','parametro'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [80, 59], label: 'Destacada' },
    { data: [228, 98], label: 'Pesima' },
    { data: [128, 78], label: 'Actual' }
  ];

  constructor(private simuService:SimuService) { }
  resulAcu$:Observable<ResAcusado[]>;
  resulAcu:ResAcusado[]=[];
  ngOnInit() {
    this.resulAcu$=this.simuService.getResulAcu();
    this.resulAcu$.subscribe(acu => {
      this.resulAcu = acu;
    });
  }
  probar(){
    console.log(this.resulAcu);
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

}
