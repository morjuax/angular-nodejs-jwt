import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Router} from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private URL = "http://localhost:3000/api";

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: object) {
    return this.http.post<any>(`${this.URL}/users/signup`, user);
  }

  signIn(user: object) {
    return this.http.post<any>(`${this.URL}/users/signin`, user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
