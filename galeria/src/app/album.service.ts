import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/models/album.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  albumUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  public getAlbum(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumUrl}`);
  }
}
