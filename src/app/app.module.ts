import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CadastroComponent } from './usuario/cadastro/cadastro.component';
import { AdicionarComponent } from './comparacao/amostra/adicionar/adicionar.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
