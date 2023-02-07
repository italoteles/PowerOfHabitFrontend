import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();
  form: FormGroup;
  passwordMatchError = false;


  constructor(private router: Router, private registerService: RegisterService) {

  }
  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = new FormGroup(
      {
        userLogin: new FormControl(''),
        userPassword: new FormControl(''),
        userPasswordConfirmation: new FormControl(''),
        userName: new FormControl(''),

      },
      { updateOn: 'submit' }
    );
  }

  register(): void {

    this.passwordMatchError = false;
    this.user.login = this.form.controls['userLogin'].value != '' ? this.form.controls['userLogin'].value : null;
    this.user.password = this.form.controls['userPassword'].value != '' ? this.form.controls['userPassword'].value : null;
    let userPasswordConfirmation = this.form.controls['userPasswordConfirmation'].value != '' ? this.form.controls['userPassword'].value : null;

    this.user.name = this.form.controls['userName'].value != '' ? this.form.controls['userName'].value : null;

    if (userPasswordConfirmation.value != this.user.password){
      this.passwordMatchError = true
      return;
    }

    this.registerService.register(this.user).subscribe((userResult) => {

      sessionStorage.setItem('user', JSON.stringify(userResult));


      this.router.navigate(['painelPrincipal']);
    }

    );
  }
}



