import {Tag} from "../shared/Tag.model";
import {User} from "../users/user.model";
export class Post {

  public id: number;
  public title: string;
  public content: string;
  public author: User;
  public status: boolean;
  public tags: Tag[];
  public featured_image: string;
  public comments: Comment[];
  public created: Date;
  public updated: Date;

  constructor(id: number,
              title: string,
              content: string,
              author: User,
              status?: boolean,
              tags?: Tag[],
              featured_image?: string,
              comments?: Comment[],
              created?: Date,
              updated?: Date) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    status ? this.status = status : this.status = true;
    this.tags = tags;
    featured_image ? this.featured_image = featured_image: this.featured_image = 'http://placehold.it/260x180';
    this.comments = comments;
    created ? this.created = created : this.created = new Date();
    updated ? this.updated = updated : this.updated = new Date();
  }

}
