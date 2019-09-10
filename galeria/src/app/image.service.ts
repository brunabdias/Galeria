import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from 'src/models/image.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imagesUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  public getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.imagesUrl}`);
  }
}
