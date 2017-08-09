import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {UsersListComponent} from "./users/users-list/users-list.component";
import {UserAddComponent} from "./users/user-add/user-add.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {PostAddComponent} from "./posts/post-add/post-add.component";
import {SinglePostComponent} from "./posts/single-post/single-post.component";
import {ProfileComponent} from "./users/profile/profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {HomeComponent} from "./home/home.component";
import {UsersService} from "./users/users.service";
import {PostsService} from "./posts/posts.service";
import {PostViewComponent } from './posts/post-view/post-view.component';
import {UserPostsComponent } from './users/user-posts/user-posts.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsListComponent},
  {path: 'posts/add', component: PostAddComponent },
  {path: 'posts/edit/:id', component: PostAddComponent},
  {path: 'posts/view/:id', component: PostViewComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'user/profile/:id', component: ProfileComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserAddComponent,
    UserEditComponent,
    PostsListComponent,
    PostAddComponent,
    SinglePostComponent,
    ProfileComponent,
    PageNotFoundComponent,
    NavigationComponent,
    HomeComponent,
    PostViewComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
      //{enableTracing: true}
    )
  ],
  providers: [
    UsersService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
