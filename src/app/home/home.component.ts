import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public gradientStroke;
  public chartColor;
  public canvas : any;
  public ctx;
  public gradientFill;
  public lineChartType;
  public lineChartData:Array<any>;
  public lineChartOptions:any;
  public lineChartLabels:Array<any>;
  public lineChartColors:Array<any>
  public gradientChartOptionsConfiguration: any;

  constructor() { }

  ngOnInit() {
  //   this.gradientChartOptionsConfiguration = {
  //     maintainAspectRatio: false,
  //     legend: {
  //         display: false
  //     },
  //     tooltips: {
  //       bodySpacing: 4,
  //       mode:"nearest",
  //       intersect: 0,
  //       position:"nearest",
  //       xPadding:10,
  //       yPadding:10,
  //       caretPadding:10
  //     },
  //     responsive: 1,
  //     scales: {
  //         yAxes: [{
  //           display:0,
  //           ticks: {
  //               display: false
  //         },
  //           gridLines: {
  //               zeroLineColor: "transparent",
  //               drawTicks: false,
  //               display: false,
  //               drawBorder: false
  //           }
  //         }],
  //         xAxes: [{
  //           display:0,
  //           ticks: {
  //               display: false
  //         },
  //           gridLines: {
  //             zeroLineColor: "transparent",
  //             drawTicks: false,
  //             display: false,
  //             drawBorder: false
  //           }
  //         }]
  //     },
  //     layout:{
  //       padding:{left:0,right:0,top:15,bottom:15}
  //     }
  // };
  // this.chartColor = "#FFFFFF";

  // this.canvas = document.getElementById("lineChartExample");
  // this.ctx = this.canvas.getContext("2d");

  // this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
  // this.gradientStroke.addColorStop(0, '#80b6f4');
  // this.gradientStroke.addColorStop(1, this.chartColor);
  // // maneja el color de fondo de la grafica
  // this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
  // this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  // this.gradientFill.addColorStop(1, "rgba(90, 170, 249, 1)");

  // //arreglo de las lineas que se mostraran
  // this.lineChartData = [
  //   {
  //       label: "Aprobados",
  //       pointBorderWidth: 2,
  //       pointHoverRadius: 4,
  //       pointHoverBorderWidth: 1,
  //       pointRadius: 4,
  //       fill: true,
  //       borderWidth: 2,
  //       data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
  //   },
  //   {
  //     label: "Rechazados",
  //     pointBorderWidth: 2,
  //     pointHoverRadius: 4,
  //     pointHoverBorderWidth: 1,
  //     pointRadius: 4,
  //     fill: true,
  //     borderWidth: 2,
  //     data: [15,121,200,154,500,245,100,152,152,154,260,264,0,154,125]
  //   },
  //   ];
  //   //decoracion de cada linea
  //   this.lineChartColors = [
  //    {
  //      borderColor: "#f96332",
  //      pointBorderColor: "#FFF",
  //      pointBackgroundColor: "#f96332",
  //      backgroundColor: this.gradientFill
  //    },
  //    {
  //      borderColor: "black",
  //      pointBorderColor: "#FFF",
  //      pointBackgroundColor: "black",
  //      backgroundColor: this.gradientFill
  //    }
  //  ];
  //  //los valores del eje x
  // this.lineChartLabels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  // this.lineChartOptions = this.gradientChartOptionsConfiguration;

  // this.lineChartType = 'line';

  }

}
