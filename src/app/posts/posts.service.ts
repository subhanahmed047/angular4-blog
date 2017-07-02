import {Injectable} from "@angular/core";

import {UsersService} from "../users/users.service";
import {Post} from "./post.model";
import {Tag} from "../shared/Tag.model";

@Injectable()
export class PostsService {

  private _posts: Post[] = [
    new Post(
      0,
      "Taking Back Monday: How to Conquer Your Chaotic To-Do List",
      "At the start of the day, you roll up your sleeves, determined to knock out each item on that to-do list. It begins.Two hours pass You are still at it go you! Two hours turn into four hours, which soon turn into nine. By the end of the day, some items are crossed off, many are not, and worse yet, even more have been added. To top it off, you have a throbbing headache that wont seem to go away.",
      this._usersService.getUser(1),
      true,
      [
        new Tag('entrepreneurs'),
        new Tag('freelance'),
        new Tag('startup'),
        new Tag('freelancers')
      ],
      'http://blog.fiverr.com/wp-content/uploads/Untitled-design-25-150x150.png'
    ),
    new Post(
      1,
      "Share Your Money Maker: Maximize Profit with Social Influencers",
      "Trust in digital advertising is at an all-time low. Display ad click-through rates are languishing at 0.05% and it’s projected that, by 2018, 30% of the world will be using ad-blockers anyway – so what doesn’t get ignored still gets blocked.",
      this._usersService.getUser(0),
      true,
      [
        new Tag('Digital Marketing'),
        new Tag('Influencer Marketing'),
      ],
      'http://blog.fiverr.com/wp-content/uploads/Untitled-design-11.png'
    ),
    new Post(
      2,
      "How To Reel In Your Audience (VIDEO)",
      "You’ve decided to stop dreaming and start doing. Great choice. Starting your own brand or business isn’t easy—it takes more than an idea and hope to get things done. That’s why we’ve compiled a step-by-step guide for starting to build a business: beginning with what you’ll need and where to find it.",
      this._usersService.getUser(2),
      true,
      [
        new Tag('Digital Marketing'),
        new Tag('Social Media Marketing'),
        new Tag('Engagement')
      ],
      'http://blog.fiverr.com/wp-content/uploads/Untitled-design-22-150x150.png'
    ),
    new Post(
      2,
      "Cutting Costs Without Cutting Corners: 7 Steps To Help Freelancers Save Money",
      "Freelancing is a growing industry, and Fiverr sellers are in a particularly lucrative position for promoting their services and tapping into a large body of buyers looking for services like theirs. But even with the benefits of freelancing, sellers still need to create a savings plan so they can continue to work in the way they want to work, and still make ends meet (and even afford a vacation here and there).",
      this._usersService.getUser(2),
      true,
      [
        new Tag('Freelance Strategy'),
        new Tag('Payoneer'),
        new Tag('Freelance'),
        new Tag('Saving')
      ],
      'http://blog.fiverr.com/wp-content/uploads/Untitled-design-26.png'
    )
  ];

  constructor(private _usersService: UsersService) {
  }

  getPosts(): Post[] {
    return this._posts.slice();
  }

  public getPost(id: number): Post {
    return this._posts.find(post => post.id == id);
  }

}
