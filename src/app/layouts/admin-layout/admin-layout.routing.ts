import { Routes } from '@angular/router';

import { IconsComponent } from '../../icons/icons.component';
import { HomeComponent } from '../../home/home.component';
import { GraficasComponent } from '../../graficas/graficas.component';
import { AnimacionComponent } from '../../animacion/animacion.component';
import { DatosInicialesComponent } from '../../datos-iniciales/datos-iniciales.component';
import { ResultadosComponent } from '../../resultados/resultados.component';
import { InstruccionesComponent } from "../../instrucciones/instrucciones.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'graficas',       component: GraficasComponent },
    { path: 'animacion',      component: AnimacionComponent },
    { path: 'datos-ini',      component: DatosInicialesComponent },
    { path: 'resultados',     component: ResultadosComponent },
    { path: 'instrucciones',  component: InstruccionesComponent },
];
