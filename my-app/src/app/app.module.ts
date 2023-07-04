import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListService } from "./user-list.service";
import { HttpClientModule } from "@angular/common/http";
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ UserListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
