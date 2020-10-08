import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantesUrl } from 'src/app/common/constantes-url';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    return this.http.get(ConstantesUrl.API_URL + ConstantesUrl.LIST_USERS, {headers});
  }

  addUser(user: User): Observable<any> {
    const headers = new HttpHeaders();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    return this.http.post(ConstantesUrl.API_URL + ConstantesUrl.ADD_USER, user, {headers});
  }
}
