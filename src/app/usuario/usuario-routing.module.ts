import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {PerfilComponent} from "./perfil/perfil.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
