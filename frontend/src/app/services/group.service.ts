import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/Group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  baseUrl = "http://localhost:3001/group";

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Group[]>{
    return this.httpClient.get<Group[]>(this.baseUrl);
  }

  getById(id:number) : Observable<Group>{
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Group>(url);
  }
  
  create(group : Group) : Observable<Group>{
    return this.httpClient.post<Group>(this.baseUrl,group);
  }

  delete(id:number) : Observable<Group>{
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.delete<Group>(url);
  }

  update(group : Group) : Observable<Group>{
    const url = `${this.baseUrl}/${group.id}`;
    return this.httpClient.put<Group>(url, group);

  }


}
