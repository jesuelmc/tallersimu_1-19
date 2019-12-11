import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Demandantes } from '../shared/models/demandantes';
import { SimuService } from '../service/simu.service';

@Component({
  selector: 'app-datos-iniciales',
  templateUrl: './datos-iniciales.component.html',
  styleUrls: ['./datos-iniciales.component.scss']
})
export class DatosInicialesComponent implements OnInit {
  demandantes$: Observable<Demandantes[]>;
  demandantes: Demandantes[];

  constructor(private demandanteService: SimuService) { }

  ngOnInit() {
    this.demandantes$=this.demandanteService.getDenunciantes();
    this.demandantes$.subscribe(dem => {
      this.demandantes = dem;
      console.log(this.demandantes);
    });
  }

}
