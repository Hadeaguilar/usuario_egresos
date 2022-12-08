import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresoComponent } from './componentes/egreso/egreso.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { VerEgresosComponent } from './componentes/ver-egresos/ver-egresos.component';
import { VerUsuarioComponent } from './componentes/ver-usuario/ver-usuario.component';

const routes: Routes = [
  { 
    path:"usuario", 
    component: UsuarioComponent
  },
  {
    path:"egreso", 
    component: EgresoComponent
  },
  {
    path:"ver_usuario", 
    component: VerUsuarioComponent
  },
  {
    path:"ver_egresos", 
    component: VerEgresosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
