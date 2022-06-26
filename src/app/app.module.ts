import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FiltroComponent } from './dashboard/components/filtro/filtro.component';
import { FinanzasComponent } from './dashboard/components/finanzas/finanzas.component';
import { ReportesComponent } from './dashboard/components/reportes/reportes.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    FiltroComponent,
    FinanzasComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
