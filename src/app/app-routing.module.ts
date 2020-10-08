import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './shared/table/table.component';
import { AddUserComponent } from './user/pages/add-user/add-user.component';
import { UserListComponent } from './user/pages/user-list/user-list.component';


const routes: Routes = [
    { path: 'list', component: UserListComponent },
    { path: 'list/user/add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
