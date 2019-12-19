import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HomeComponent } from '../../home/home.component';
import { GraficasComponent } from '../../graficas/graficas.component';
import { AnimacionComponent } from '../../animacion/animacion.component';
import { DatosInicialesComponent } from '../../datos-iniciales/datos-iniciales.component';
import { ResultadosComponent } from '../../resultados/resultados.component';
import { InstruccionesComponent } from "../../instrucciones/instrucciones.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'graficas',       component: GraficasComponent },
    { path: 'animacion',      component: AnimacionComponent },
    { path: 'datos-ini',      component: DatosInicialesComponent },
    { path: 'resultados',     component: ResultadosComponent },
    { path: 'instrucciones',  component: InstruccionesComponent },
];
