import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';

class ImageList {
  id: number;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-image-listing',
  templateUrl: './image-listing.component.html',
  styleUrls: ['./image-listing.component.scss']
})
export class ImageListingComponent implements OnInit {

  public image: ImageList[] = [];

  constructor(private route: ActivatedRoute,
    private imageService: ImageService) { }

  ngOnInit() {
    this.getImage();
  }

  public getImage(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.imageService.getImages().subscribe(images => {
      let imageList = [];

      images.forEach(image => {
        if(image.albumId === id) {
          imageList.push({
            id: image.id,
            thumbnailUrl: image.thumbnailUrl
          });
        }
      });
      this.image = imageList.slice(0, 10);
    });
  }

}
