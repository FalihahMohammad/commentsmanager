import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './comments/comments.component';
// import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'comments/:id',
    component: CommentsComponent
  },
  /* {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'posts',
    component: PostsComponent
  }, */

  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
