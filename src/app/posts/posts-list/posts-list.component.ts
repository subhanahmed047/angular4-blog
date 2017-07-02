import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../post.model";
import {UsersService} from "../../users/users.service";
import {User} from "../../users/user.model";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: Post[];
  users: User[];

  constructor(private _postsService: PostsService, private _usersService: UsersService) { }

  ngOnInit() {
    this.posts = this._postsService.getPosts();
  }

}
