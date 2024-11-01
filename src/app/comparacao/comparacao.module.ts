import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComparacaoRoutingModule } from './comparacao-routing.module';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { HistoricoComponent } from './historico/historico.component';


@NgModule({
  declarations: [
    DetalhesComponent,
    HistoricoComponent
  ],
  imports: [
    CommonModule,
    ComparacaoRoutingModule
  ]
})
export class ComparacaoModule { }
