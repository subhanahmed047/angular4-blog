import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../user.model";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.users = this._usersService.getUsers();
  }

}
