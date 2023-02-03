import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';


@Injectable({
    providedIn: 'root'
  })
export class AuthenticationService{
    baseUrl = "http://localhost:3001/user";

    constructor(private http : HttpClient)
    {

    }

    login(user : User) : Observable<User[]>{
        const url = `${this.baseUrl}?login=${user.login}&password=${user.password}`;
        
        return this.http.get<User[]>(url);
        
    }

}
