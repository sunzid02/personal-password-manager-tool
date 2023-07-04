import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'all-users', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  UserListComponent
]
