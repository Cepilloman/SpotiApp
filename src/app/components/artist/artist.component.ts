import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {
  artista:any = {};
  topTracks:any[] = [];
  loading:boolean;

  constructor(private router: ActivatedRoute , private spotify : SpotifyService) {
    this.router.params.subscribe( params =>{
      this.getArtista(params['id']);
      this.getTracks(params['id']);
    });
  }

  getArtista(id:string){
    this.loading = true;
    this.spotify.getArtistById(id)
    .subscribe( artista =>  {
      this.artista = artista
      this.loading = false;
      });
  }

  getTracks(id:string){
    this.spotify.getTopTracks(id)
    .subscribe(tracks => this.topTracks = tracks);
  }
}
