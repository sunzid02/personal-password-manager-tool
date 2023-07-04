import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserListService } from "../user-list.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent {

  private _url = "http://localhost:3000/users";
  public userList:any[] = [];


  constructor( private _userlistService: UserListService, private router:Router){
  }

  allUsers(){
    return this._userlistService.getUserList().subscribe( data => this.userList = data);
  }

  ngOnInit(): void {

  }

  submit(data: any){

    this._userlistService.createUser(data).subscribe( (result: any) => {
      if (result) {
        alert("User Created sucessfully!");
        this.allUsers();
        //redirect
        this.router.navigate(['all-users']);


      }
    });

  }

}
