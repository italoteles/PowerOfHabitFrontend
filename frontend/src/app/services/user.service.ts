import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

export class UserService{
    baseUrl = "http://localhost:3001/user";

    constructor(private http : HttpClient)
    {

    }

    login(user : User) : Observable<User[]>{
        const url = `${this.baseUrl}/${id}`
        return this.http.get<User[]>(this.baseUrl);
        
    }

}
