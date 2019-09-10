import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSelectComponent } from './user-select/user-select.component';
import { AlbumListingComponent } from './album-listing/album-listing.component';
import { ImageListingComponent } from './image-listing/image-listing.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserSelectComponent },
  { path: 'user/:id', component: AlbumListingComponent },
  { path: 'album/:id', component: ImageListingComponent },
  { path: 'image-details/:id', component: ImageDetailComponent }
  
  // { path: 'users/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
