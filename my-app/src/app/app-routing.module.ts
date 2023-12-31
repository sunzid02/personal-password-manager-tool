import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import {  UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-users', pathMatch: 'full'},
  { path: 'all-users', component: UserListComponent},
  { path: 'create-user', component: AddUserFormComponent},
  { path: 'update-user/:id', component: UpdateUserComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UserListComponent, AddUserFormComponent, PageNotFoundComponent
]
