import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserListService } from "../user-list.service";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent {

  private _url = "http://localhost:3000/users";

  constructor( private _userlistService: UserListService){
  }

  ngOnInit(): void {

  }

  submit(data: any){

    this._userlistService.createUser(data).subscribe( (result: any) => {
      console.log(result);
      console.log(atob(result.encryptedPassword));
    });
  }

}
