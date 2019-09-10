import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

class Album {
  id: number;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.scss']
})
export class AlbumListingComponent implements OnInit {

  public albuns: Album[] = [];

  public albumId: number[] = [];
  public albumThumbnail: string[] = [];

  constructor(private route: ActivatedRoute,
    private albumService: AlbumService,
    private imageService: ImageService) { }

  ngOnInit() {
    this.getAlbuns();
  }

  public getAlbuns(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.albumService.getAlbum().subscribe(albuns => {
      let albumList = [];

      albuns.forEach(album => {
        if(album.userId === id) {
          albumList.push(album.id);
        }
      });
      this.albumId = albumList;

      this.imageService.getImages().subscribe(images => {
        let imageUrl = [];
        let albumObject = [];

        this.albumId.forEach(id => {
          imageUrl = [];

          images.forEach(image => {
            if(image.albumId === id) {
              imageUrl.push(image.thumbnailUrl);
            }
          });

          albumObject.push({
            id: id,
            url: imageUrl[0]
          });
        });

        this.albuns = albumObject;
      });
    });
  }

}
