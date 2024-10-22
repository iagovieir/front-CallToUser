import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class authService {

  

  constructor() { }
  
    isAuthenticated(): boolean {
      return !!localStorage.getItem('authToken');

    }
  
    login() {
      localStorage.setItem('authToken', '');

    }
  
    logout() {
      localStorage.removeItem('authToken');
    }
  }
