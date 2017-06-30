import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { ProfileComponent } from './users/profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: PostsListComponent},
  {path: 'posts/add', component: PostAddComponent},
  {path: 'posts/edit/:id', component: PostEditComponent},
  {path: 'posts/view/:id', component: SinglePostComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'user/profile/:id', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserAddComponent,
    UserEditComponent,
    PostsListComponent,
    PostAddComponent,
    PostEditComponent,
    SinglePostComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      //{enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
