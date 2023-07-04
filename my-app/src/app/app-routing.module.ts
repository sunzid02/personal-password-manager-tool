import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {  UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'all-users', component: UserListComponent},
  { path: 'create-user', component: AddUserFormComponent},
  { path: 'update-user/:id', component: UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UserListComponent, AddUserFormComponent
]
