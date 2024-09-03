import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardContent} from "@angular/material/card";
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {merge} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIcon, MatCardContent, FormsModule, ReactiveFormsModule, MatCard]

})
export class LoginComponent {

  /*ESCONDER SENHA*/
  get hide(): boolean {
    return <boolean>this._hide;
  }

  set hide(value: boolean) {
    this._hide = value;
  }

  _hide: boolean | undefined;

  /*SENHA*/
  password = new FormControl ('', [Validators.required]);


  /*EMAIL*/
  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';


  constructor() {
    /*CONTRUTOR EMAIL*/
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

    /*CONTRUTOR SENHA*/
    merge(this.password.statusChanges, this.password.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }



  updateErrorMessage() {
    /*ERRO EMAIL*/
    if (this.email.hasError('required')) {
      this.errorMessage = 'Você precisa inserir um email';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Email Inválido';
    } else {
      this.errorMessage = '';
    }

    /*ERRO SENHA*/
    if (this.password.hasError('required')) {
      this.errorMessage = 'Você precisa preencher o campo';
    } else if (this.password.hasError('password')) {
      this.errorMessage = 'Conteúdo Inválida';
    } else {
      this.errorMessage = '';
    }
  }
}
