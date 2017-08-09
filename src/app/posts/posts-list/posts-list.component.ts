import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../post.model";
import {User} from "../../users/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

  posts: Post[];
  users: User[];

  searchQuery: string;
  queryChange;

  constructor(private _postsService: PostsService,
              private _route: ActivatedRoute) {
  }

  ngOnInit() {

    this.queryChange = this._route.queryParams.subscribe(queryParams => {
        if (queryParams['q'] !== null) {
          this.searchQuery = queryParams['q'];
          this.posts = this._postsService.search(this.searchQuery);
        }
        else {
          this.posts = this._postsService.getPosts();
        }
      }
    );
  }


  ngOnDestroy(): void {
    if (this.queryChange
    ) {
      this.queryChange.unsubscribe();
    }
  }

}
