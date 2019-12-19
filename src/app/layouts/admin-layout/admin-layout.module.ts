import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { IconsComponent } from '../../icons/icons.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from '../../home/home.component';
import { SimulacionComponent } from '../../simulacion/simulacion.component';
import { GraficasComponent } from '../../graficas/graficas.component';
import { AnimacionComponent } from '../../animacion/animacion.component';
import { DatosInicialesComponent } from '../../datos-iniciales/datos-iniciales.component';
import { ResultadosComponent } from '../../resultados/resultados.component';
import { InstruccionesComponent } from '../../instrucciones/instrucciones.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    IconsComponent,
    HomeComponent,
    SimulacionComponent,
    GraficasComponent,
    AnimacionComponent,
    DatosInicialesComponent,
    ResultadosComponent,
    InstruccionesComponent,
  ],
  exports:[
    
  ]
})

export class AdminLayoutModule {}
