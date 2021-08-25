import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../environments/environment";
const API_URL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  add_users(data: any) {
    return this.http.post(`${API_URL}api/v1/userReg`, data);
  }

  use_login(data: any) {
    return this.http.post(`${API_URL}api/v1/getUser`, data);
  }

}