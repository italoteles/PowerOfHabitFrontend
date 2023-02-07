import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = "http://localhost:3001/user";

    constructor(private http : HttpClient)
    {

    }

    register(user : User) : Observable<User>{
        
        
        return this.http.post<User>(this.baseUrl,user);
        
    }

  
}
