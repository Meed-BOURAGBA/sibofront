import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Columns } from 'src/app/shared/models/columns';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  userList: Array<User> = [];
  columns: Columns[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.columns = [
      {
        libelle: "Name",
        attribute: "name"
      },
      {
        libelle: "First Name",
        attribute: "firstName"
      },
      {
        libelle: "Role",
        attribute: "role"
      },
      {
        libelle: "Email",
        attribute: "email"
      }
    ]
    this.userService.getUserList().subscribe(userList => {
      this.userList = userList;
    })
  }

}
