import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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


  /*EMAIL*/
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  passwordFormControl = new FormControl('', [Validators.required]);


  constructor() {}

}
