import {Component, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../post.model";
import {UsersService} from "../../users/users.service";
import {Tag} from "../../shared/tag.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  constructor(
    private _postsService: PostsService,
    private _usersService: UsersService,
    private _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: HTMLFormElement) {

   /* var tags: Tag[];

    for (let tag of form.value.tags.split(',')) {
      tags.push(new Tag(tag));
    }*/

    let post = new Post(
      this._postsService.getPosts().length, //id
      form.value.title,
      form.value.content,
      this._usersService.getUser(0),
      true,
      [
        new Tag(form.value.tags.split(','))
      ],
      form.value.featuredImage
    );

    //console.log(post);
   this._postsService.add(post);
   this._router.navigate(['/posts']);

  }

}
