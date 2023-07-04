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

  //returns all the user from database
  getUserList(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }

  //Will create a single new user to our server
  createUser(data: any){
    // encode the password
    data.encryptedPassword = btoa(data.encryptedPassword);

    //decode let encoded: string = atob("bXlQYXNzd29yZCE=");
    return this.http.post( this._url, data )
  }


  //delete a user
  deleteUser(id: number){

     let del = this.http.delete(this._url+ '/' +id);
     alert('User deleted.....');

     return del;
  }



}
