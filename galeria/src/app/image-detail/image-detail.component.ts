import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

class ImageDetail {
  id: number;
  title: string;
  url: string
}

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  public imageDetails: ImageDetail = {id:null, title:"", url:""};

  constructor(private route: ActivatedRoute,
    private imageService: ImageService) { }

  ngOnInit() {
    this.getImageDetail();
  }

  public getImageDetail() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.imageService.getImages().subscribe(images => {

      images.forEach(image => {
        if(image.id === id) {
          this.imageDetails.id = image.id;
          this.imageDetails.title = image.title;
          this.imageDetails.url = image.url;
        }
      });
    });
  }

}
