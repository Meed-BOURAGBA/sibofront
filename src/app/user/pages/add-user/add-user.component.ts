import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSave($event) {
    this.userService.addUser($event).subscribe(bool => {
      console.log(bool);
    })
  }

}
