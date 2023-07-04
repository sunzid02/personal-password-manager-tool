import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private _url = "http://localhost:3000/users"
  constructor(private http: HttpClient) { }

  getUserList(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }
}
