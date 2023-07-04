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

  createUser(data: any){
    // encode
    data.encryptedPassword = btoa(data.encryptedPassword);

    //decode let encoded: string = atob("bXlQYXNzd29yZCE=");

    return this.http.post( this._url, data )
  }
}
