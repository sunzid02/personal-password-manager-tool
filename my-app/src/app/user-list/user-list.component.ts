import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from "../user-list.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public userList:any[] = [];

  constructor(private _userlistService: UserListService, private router: Router){

  }

  allUsers(){
    return this._userlistService.getUserList().subscribe( data => this.userList = data);

  }

  ngOnInit(){
     this.allUsers();
  }

  onDelete(userId: number){
    this._userlistService.deleteUser(userId).subscribe();
    alert('deleted...');
    this.allUsers();
    this.router.navigate(['/all-users']);
  }

  onUpdate(userId: number){
    this.router.navigate(['/update-user', userId]);
  }

}
