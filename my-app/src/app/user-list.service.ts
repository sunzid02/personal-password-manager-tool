import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './users';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  }

  private _url = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  //returns all the user from database
  getUserList(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }

  //Will create a single new user to our server
  createUser(data: any): Observable<IUsers>{
    // encode the password
    data.encryptedPassword = btoa(data.encryptedPassword);

    //decode let encoded: string = atob("bXlQYXNzd29yZCE=");
    return this.http.post<IUsers>( this._url, data )
  }


  //delete a user
  deleteUser(id: number): Observable<IUsers>{

     let del = this.http.delete<IUsers>(this._url+ '/' +id, this.httpOptions);
     return del;
  }


  //get user info of a particular user
  getUpdateUser(id: number):  Observable<IUsers>{
    const url = this._url+'/'+ id;
    return this.http.get<IUsers>(url, this.httpOptions)
  }

  //update user
  updateUser(user: IUsers):  Observable<IUsers>{
    const url = this._url+'/'+ user.id;
    user.encryptedPassword = btoa(user.encryptedPassword);

    return this.http.put<IUsers>(url, user,this.httpOptions).pipe(
      map(() => user)
    );
  }


}
