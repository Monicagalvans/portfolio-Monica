import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducacionComponent } from './modulos/educacion/educacion.component';
import { PerfilComponent } from './modulos/perfil/perfil.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { Error404Component } from './modulos/error404/error404.component';
import { FooterComponent } from './modulos/footer/footer.component';
import { PrincipalComponent } from './modulos/principal/principal.component';
import { SobremiComponent } from './modulos/sobremi/sobremi.component';
import { ProyectosComponent } from './modulos/proyectos/proyectos.component';
import { RedesComponent } from './modulos/redes/redes.component';
import { HardysoftskyllsComponent } from './modulos/hardysoftskylls/hardysoftskylls.component';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    PerfilComponent,
    NavbarComponent,
    AdministracionComponent,
    Error404Component,
    FooterComponent,
    PrincipalComponent,
    SobremiComponent,
    ProyectosComponent,
    RedesComponent,
    HardysoftskyllsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
