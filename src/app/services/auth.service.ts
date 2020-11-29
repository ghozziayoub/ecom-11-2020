import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUserAPI = "http://127.0.0.1:8081/api/v1/auth/login"

  constructor(private http: HttpClient,) { }

  loginUser(user) {
    return this.http.post<any>(this.loginUserAPI, user)
  }

  isLoggedIn(){
    let token = localStorage.getItem('mytoken')

    if (token) {
      return true
    } else {
      return false
    }
  }

}
