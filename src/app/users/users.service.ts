import {User} from "./user.model";
import {EventEmitter} from "@angular/core";

export class UsersService {

  private _users: User[] = [
    new User(0, "Subhan Ahmed", "subhanahmed", "subhanahmed047@gmail.com"),
    new User(1, "Additya Singghi", "didi", "didi@gmail.com"),
    new User(2, "Abdul Rehman", "farooqi", "abd_farooqi@yahoo.com")
  ];

  public usersChanged = new EventEmitter<User[]>();

  constructor() {
  }

  public getUsers(): User[] {
    return this._users.slice();
  }

  public add(user: User) {
    this._users.push(user);
    this.usersChanged.emit(this._users.slice())
  }

  public getUser(id: number): User {
    return this._users.find(user => user.id == id);
  }


}
