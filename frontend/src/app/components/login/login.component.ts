import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: User;
  form: UntypedFormGroup;


  constructor(private router:Router,private authenticationService: AuthenticationService) { 

  }
  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form = new UntypedFormGroup(
      {
        userLogin: new UntypedFormControl(''),
        userPassword: new UntypedFormControl(''),
       
      },
      { updateOn: 'submit' }
    );
  }

  login(): void {
    
    this.userForm.login = this.form.controls['userLogin'].value != '' ? this.form.controls['userLogin'].value : null;
    this.userForm.login = this.form.controls['userPassword'].value != '' ? this.form.controls['userPassword'].value : null;
  
    this.authenticationService.login(this.userForm).subscribe(userResult => {
      if (userResult != null){
        //o session so guarda string, então para guardar objeto temos que dar o stringfy
        
        sessionStorage.setItem('user', JSON.stringify(userResult));

        //para ler o session tem que dar um parse de string para JSON
        // var retrievedObject = localStorage.getItem('testObject');
        // console.log('retrievedObject: ', JSON.parse(retrievedObject));

        this.router.navigate(['painelPrincipal']);
      }
      
    });
  }

}
