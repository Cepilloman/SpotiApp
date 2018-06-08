import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

    albumes: any[] = [];

  /*constructor(private spotify: SpotifyService) {
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
    .subscribe( (data:any) => {
      this.paises = data;
    });
  }*/

  constructor( private spotify : SpotifyService ){
    this.spotify.getNewReleases()
    .subscribe( (data: any) => this.albumes = data);
  }

}
