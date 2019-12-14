import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { HomeComponent } from '../../home/home.component';
import { SimulacionComponent } from '../../simulacion/simulacion.component';
import { GraficasComponent } from '../../graficas/graficas.component';
import { AnimacionComponent } from '../../animacion/animacion.component';
import { DatosInicialesComponent } from '../../datos-iniciales/datos-iniciales.component';
import { ResultadosComponent } from '../../resultados/resultados.component';

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
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    HomeComponent,
    SimulacionComponent,
    GraficasComponent,
    AnimacionComponent,
    DatosInicialesComponent,
    ResultadosComponent
  ],
  exports:[
    
  ]
})

export class AdminLayoutModule {}
