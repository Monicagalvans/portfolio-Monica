import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { Error404Component } from './modulos/error404/error404.component';
import { PrincipalComponent } from './modulos/principal/principal.component';

const routes: Routes = [
{path: '', component:PrincipalComponent},
{path: 'administracion', component:AdministracionComponent},
{path: ',',redirectTo:'/',pathMatch:'full'},
{path:'principal', component:PrincipalComponent},
{path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

