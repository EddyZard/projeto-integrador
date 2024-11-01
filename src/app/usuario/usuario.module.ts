import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    CadastroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    LoginComponent
  ]
})
export class UsuarioModule { }




