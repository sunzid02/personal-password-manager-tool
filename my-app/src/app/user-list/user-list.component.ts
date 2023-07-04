import { Component } from '@angular/core';
import { UserListService } from "../user-list.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public userList:any[] = [];

  constructor(private _userlistService: UserListService){

  }

  allUsers(){
    return this._userlistService.getUserList().subscribe( data => this.userList = data);

  }

  ngOnInit(){
     this.allUsers();
  }

  onDelete(userId: number){
    this._userlistService.deleteUser(userId).subscribe();
    this.allUsers();

  }
}
