import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmostraRoutingModule } from './amostra-routing.module';
import { AdicionarComponent } from './adicionar/adicionar.component';


@NgModule({
  declarations: [
    AdicionarComponent
  ],
  imports: [
    CommonModule,
    AmostraRoutingModule
  ]
})
export class AmostraModule { }
