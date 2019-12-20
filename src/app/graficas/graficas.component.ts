import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { DataLinea } from '../shared/models/data-linea';
import { GraphicPoint } from '../shared/models/graphic-point';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {

  public dataMeses: DataTable;
  public dataSemanas: DataTable;
  public dataDias: DataTable;
  public dataHoras: DataTable;

  public initialPointMes: GraphicPoint = {
    time: "Enero",
    value: 0
  };
  public initialPointSemana: GraphicPoint = {
    time: "Semana 1",
    value: 0
  };
  public initialPointdia: GraphicPoint = {
    time: "Lunes",
    value: 0
  };
  public initialPointHora: GraphicPoint = {
    time: "06:00",
    value: 0
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll()
      .subscribe(
        (response: DataLinea[]) => {
          this.setupDataMeses(response);
          this.setupDataSemanas(response);
          this.setupDataDias(response);
          this.setupDataHoras(response);
        }
      );
  }
  private setupDataMeses(data: DataLinea[]): any {
    this.dataMeses = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataMeses.headers.push("");
    data.forEach(dataLinea => {
      this.dataMeses.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datameses);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataMeses.columns.push(arrayItem)
      }
    }
  }

  private setupDataSemanas(data: DataLinea[]): any {
    this.dataSemanas = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataSemanas.headers.push("");
    data.forEach(dataLinea => {
      this.dataSemanas.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datasemanas);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataSemanas.columns.push(arrayItem)
      }
    }
  }

  private setupDataDias(data: DataLinea[]): any {
    this.dataDias = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataDias.headers.push("");
    data.forEach(dataLinea => {
      this.dataDias.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datadias);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataDias.columns.push(arrayItem)
      }
    }
  }

  private setupDataHoras(data: DataLinea[]): any {
    this.dataHoras = {
      headers: [],
      columns: []
    };
    let aux: any[] = [];
    this.dataHoras.headers.push("");
    data.forEach(dataLinea => {
      this.dataHoras.headers.push(dataLinea.nombre);
      aux.push(dataLinea.datahoras);
    });
    if (aux.length >= 1) {
      for (let index = 0; index < aux[0].length; index++) {
        const element0 = aux[0][index];
        const element1 = aux[1][index];
        const element2 = aux[2][index];
        let arrayItem: any[] = [];
        arrayItem.push(element0.time);
        arrayItem.push(element0.value);
        arrayItem.push(element1.value);
        arrayItem.push(element2.value);
        this.dataHoras.columns.push(arrayItem)
      }
    }
  }

}

export interface DataTable {
  headers: string[],
  columns: any[][],
}