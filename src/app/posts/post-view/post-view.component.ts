import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() post: Post;

  constructor(private _route: ActivatedRoute, private _postsService: PostsService) { }

  ngOnInit() {
    this.post = this._postsService.getPost(this._route.snapshot.params['id']);
  }

}
