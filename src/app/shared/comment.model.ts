export class Comment{

  public id: number;
  public post_id: number;
  public user_id: number;
  public content: string;
  public status: boolean;

  constructor(
    id: number,
    post_id: number,
    user_id: number,
    content: string,
    status?: boolean
  ){
    this.id = id;
    this.post_id = post_id;
    this.user_id = user_id;
    this.content = content;
    this.status = status;
  }

}
