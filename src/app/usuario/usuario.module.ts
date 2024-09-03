import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatCard,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatIcon,
    LoginComponent,
  ]
})
export class UsuarioModule { }




