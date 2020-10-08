import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Output()
  sendUser = new EventEmitter();
  formUser;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      firstName: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  onSave() {
    let user = new User();
    user.name = this.formUser.get('name').value;
    user.firstName = this.formUser.get('firstName').value;
    user.role = this.formUser.get('role').value;
    user.email = this.formUser.get('email').value;
    console.log(user);
    this.sendUser.emit(user);
  }
  onCancel() {
    this.router.navigate(["/list"]);
  }
}
