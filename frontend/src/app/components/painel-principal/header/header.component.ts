import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : User;
  
  ngOnInit(): void {

    this.user =  JSON.parse(sessionStorage.getItem('user'));
    
  }

}
