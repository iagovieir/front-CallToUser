import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Users } from '../models/returnUser/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment
  
  constructor(private httpClient : HttpClient) { }

  obterUsers(){
    return this.httpClient.get<Users[]>(`${this.url.api}/users`) 
  }
}
