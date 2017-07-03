import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() user: User;

  constructor(private _route: ActivatedRoute, private _usersService: UsersService) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this.user = this._usersService.getUser(id);
  }

}
