import { Component, OnInit, Input } from '@angular/core';
import * as Chartist from 'chartist';
import { GraphicPoint } from "../shared/models/graphic-point";
import { DataLinea } from "../shared/models/data-linea";
import { DataService } from '../shared/services/data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-simulacion',
  templateUrl: './simulacion.component.html',
  styleUrls: ['./simulacion.component.scss']
})
export class SimulacionComponent implements OnInit {
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

  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;


  public lineBigDashboardChartType;
  public lineBigDashboardChartData:Array<any>;
  public lineBigDashboardChartOptions:any;
  public lineBigDashboardChartLabels:Array<any>;
  public lineBigDashboardChartColors:Array<any>

  @Input()
  public initialpoint: GraphicPoint;
  @Input()
  public datatime: string;

  public disableSimulacionBtn: boolean = false;

  public chartClicked(e:any):void {
    console.log(e);
}

  public chartHovered(e:any):void {
    console.log(e);
}
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


  constructor(private dataService: DataService,
    private modalService: NgbModal) { }

  ngOnInit() {
    let response: DataLinea[] = this.dataService.getAllI();
    this.loadDataToGraphic(
      this.getInitialData(response),
      this.getHeaders()
    );
    // this.chartColor = "#FFFFFF";
    // this.canvas = document.getElementById("bigDashboardChart");
    // this.ctx = this.canvas.getContext("2d");

    // this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    // this.gradientStroke.addColorStop(0, '#80b6f4');
    // this.gradientStroke.addColorStop(1, this.chartColor);

    // this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    // this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    // this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

    // this.lineBigDashboardChartData = [
    //     {
    //       label: "Data",

    //       pointBorderWidth: 1,
    //       pointHoverRadius: 7,
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 5,
    //       fill: true,

    //       borderWidth: 2,
    //       data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
    //     }
    //   ];
    //   this.lineBigDashboardChartColors = [
    //    {
    //      backgroundColor: this.gradientFill,
    //      borderColor: this.chartColor,
    //      pointBorderColor: this.chartColor,
    //      pointBackgroundColor: "#2c2c2c",
    //      pointHoverBackgroundColor: "#2c2c2c",
    //      pointHoverBorderColor: this.chartColor,
    //    }
    //  ];
    // this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    // this.lineBigDashboardChartOptions = {

    //       layout: {
    //           padding: {
    //               left: 20,
    //               right: 20,
    //               top: 0,
    //               bottom: 0
    //           }
    //       },
    //       maintainAspectRatio: false,
    //       tooltips: {
    //         backgroundColor: '#fff',
    //         titleFontColor: '#333',
    //         bodyFontColor: '#666',
    //         bodySpacing: 4,
    //         xPadding: 12,
    //         mode: "nearest",
    //         intersect: 0,
    //         position: "nearest"
    //       },
    //       legend: {
    //           position: "bottom",
    //           fillStyle: "#FFF",
    //           display: false
    //       },
    //       scales: {
    //           yAxes: [{
    //               ticks: {
    //                   fontColor: "rgba(255,255,255,0.4)",
    //                   fontStyle: "bold",
    //                   beginAtZero: true,
    //                   maxTicksLimit: 5,
    //                   padding: 10
    //               },
    //               gridLines: {
    //                   drawTicks: true,
    //                   drawBorder: false,
    //                   display: true,
    //                   color: "rgba(255,255,255,0.1)",
    //                   zeroLineColor: "transparent"
    //               }

    //           }],
    //           xAxes: [{
    //               gridLines: {
    //                   zeroLineColor: "transparent",
    //                   display: false,

    //               },
    //               ticks: {
    //                   padding: 10,
    //                   fontColor: "rgba(255,255,255,0.4)",
    //                   fontStyle: "bold"
    //               }
    //           }]
    //       }
    // };

    // this.lineBigDashboardChartType = 'line';

//     //ejemplo
//     this.gradientChartOptionsConfiguration = {
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

// }
//animacion de estaadisticas
  }
  public getHeaders(): any[] {
    let response: DataLinea[] = this.dataService.getAllI();
    let array: any[] = response.map((e) => {
      return e[this.datatime].map((t) => t.time);
    });
    if (array.length > 0) {
      return array[0];
    }
    return [];
  }

  public getInitialData(response: DataLinea[]): any[] {
    return response.map((e) => {
      return {
        color: e.color,
        data: []
      }
    });
  }

  public tbody: any[] = [];
  loadDataToGraphic(datas: any[], labels: any[]): void {
    //console.log('datas ', datas);

    this.chartColor = "#FFFFFF";
    this.canvas = document.getElementById("bigDashboardChart");
    this.ctx = this.canvas.getContext("2d");

    this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
    this.gradientStroke.addColorStop(0, '#80b6f4');
    this.gradientStroke.addColorStop(1, this.chartColor);

    this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(238, 196, 243, 0)");
    this.gradientFill.addColorStop(1, "rgba(82,10, 91, 0.35)");
    /** */
    this.lineBigDashboardChartData = [];
    this.lineBigDashboardChartColors = [];
    let array: any[] = [];
    datas.forEach(element => {


      //if (!element.data[element.data.length - 1])
      array.push(element.data[element.data.length - 1]);

      this.lineBigDashboardChartData.push(
        {
          label: "Personas",
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: element.data
        }
      );
      this.lineBigDashboardChartColors.push(
        {
          backgroundColor: this.gradientFill,
          borderColor: element.color,
          pointBorderColor: element.color,
          pointBackgroundColor: element.color,
          pointHoverBackgroundColor: "#ffffff",
          pointHoverBorderColor: element.color,
        }
      );
    });

    if (array[0])
      this.tbody.push(array);

    /** */
    this.lineBigDashboardChartLabels = labels;
    this.lineBigDashboardChartOptions = {
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 0,
          bottom: 0
        }
      },
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: '#fff',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      legend: {
        position: "bottom",
        fillStyle: "#FFF",
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 10
          },
          gridLines: {
            drawTicks: true,
            drawBorder: false,
            display: true,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          }

        }],
        xAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            display: false,

          },
          ticks: {
            padding: 10,
            fontColor: "rgba(255,255,255,0.4)",
            fontStyle: "bold"
          }
        }]
      }
    };

    this.lineBigDashboardChartType = 'line';


    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };
  }



private intervalId: any = 0;
private counter: number = 0;
private isMapped: boolean = false;
private globalData: any[] = [];

getGlobalData(): any[] {
  if (this.isMapped) {
    return this.globalData;
  } else {
    let response: DataLinea[] = this.dataService.getAllI();
    let data: any[] = response.map((element) => {
      return {
        color: element.color,
        data: element[this.datatime].map((e) => e.value)
      }
    });
    data = data.map((element) => {
      return {
        color: element.color,
        data: element.data.map((e) => {
          let randomNumber: number = Math.random() * (1.15 - 0.85) + 0.85;
          return Math.floor(e * randomNumber);
        })

      }
    });
    this.isMapped = true;
    this.globalData = data;
    return data;
  }
}

playSimulation(): void {
  this.disableSimulacionBtn = true;
  let data: any[] = this.getGlobalData();
  let headers: any[] = this.getHeaders();
  this.intervalId = setInterval(() => {
    if (this.counter < headers.length) {
      let dataToSend: any[] = data.map((element) => {
        return {
          color: element.color,
          data: element.data.slice(0, this.counter + 1)
        };
      });
      this.loadDataToGraphic(dataToSend, headers);
      this.counter++;
    } else {
      clearInterval(this.intervalId);
      this.counter = 0;
      this.disableSimulacionBtn = false;
      this.isMapped = false;
    }

  }, 1000);

}
stopSimulation(): void {
  clearInterval(this.intervalId);
  this.disableSimulacionBtn = false;
}

offSimulation(): void {
  clearInterval(this.intervalId);
  this.counter = 0;
  this.disableSimulacionBtn = false;
  this.isMapped = false;
  this.ngOnInit();
  this.tbody = [];
}

}
