import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatDividerModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListingComponent } from './album-listing/album-listing.component';
import { ImageListingComponent } from './image-listing/image-listing.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AlbumService } from './album.service';
import { ImageService } from './image.service';
import { UserSelectComponent } from './user-select/user-select.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListingComponent,
    ImageListingComponent,
    ImageDetailComponent,
    UserSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [
    AlbumService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
