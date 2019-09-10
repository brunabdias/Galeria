import { Component, OnInit } from '@angular/core';
import { Album } from 'src/models/album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.scss']
})
export class UserSelectComponent implements OnInit {

  public album: Album[] = [];
  public user: number[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.albumService.getAlbum().subscribe(albuns => {
      let userList = [];

      albuns.forEach(album => {
        userList.push(album.userId);
      });

      let unique = [...new Set(userList)];
      this.user = unique;
    });
  }

}
