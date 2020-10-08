import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ConsultUserComponent } from './pages/consult-user/consult-user.component';



@NgModule({
  declarations: [AddUserComponent, UpdateUserComponent, UserListComponent, UserFormComponent, ConsultUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [],
})
export class UserModule { }
