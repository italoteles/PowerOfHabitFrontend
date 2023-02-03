import { Component } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : User;
  users : User[];

  constructor(private userService : UserService){}

  login() : void{
    this.userService.login(this.user).subscribe(users => {
      
    });
  }

}
