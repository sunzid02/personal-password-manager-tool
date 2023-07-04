import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListService } from "./user-list.service";
import { HttpClientModule } from "@angular/common/http";
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddUserFormComponent,
    UpdateUserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [ UserListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
