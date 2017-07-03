import {User} from "./user.model";
import {EventEmitter} from "@angular/core";

export class UsersService {

  private _users: User[] = [
    new User(0, "Subhan Ahmed", "subhanahmed", "subhanahmed047@gmail.com", 'https://cdn4.iconfinder.com/data/icons/danger-soft/512/people_user_business_web_man_person_social-512.png', 420226384, 'Software Engineer who works effectively in a dynamic environment. 3 Years of hands on experience in web development and web designing. Also good at Java Development, Database programming, Graphic designing & Animations.', [
      'Programming', 'Hacking', 'Book Reading', 'Blog Writing'
    ]),
    new User(1, "Additya Singghi", "didi", "didi@gmail.com", 'https://cryptors.org/src/img/index/hackerIcon2.png'),
    new User(2, "Abdul Rehman", "farooqi", "abd_farooqi@yahoo.com", 'http://www.untan.ac.id/wp-content/uploads/2016/08/Manager-512.png')
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
