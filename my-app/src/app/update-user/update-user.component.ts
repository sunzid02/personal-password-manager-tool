import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent {

  constructor(private route: ActivatedRoute, private router: Router, private _userlistService: UserListService){

  }
  val: any;
  public userList:any[] = [];
  public user:any;

  allUsers(){
    return this._userlistService.getUserList().subscribe( data => this.userList = data);
  }

  ngOnInit(){

    //getting userid from user-list compo
    let sub = this.route.params.subscribe(params => {
      this.val = params['id'];
    });

    console.log(this.val);

    this._userlistService.getUpdateUser(this.val).subscribe( data => {

      //data of the selected user
      data.encryptedPassword = atob(data.encryptedPassword);
      this.user = data;

    });

  }


  update(data: any){
    this._userlistService.updateUser(this.user).subscribe(data => {

    });

    this.allUsers();

    //redirect
    this.router.navigate(['all-users']);
  }

}
