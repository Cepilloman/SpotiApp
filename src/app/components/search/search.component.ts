import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(private spotify : SpotifyService ) { }

  artistas: any[] = [];

  buscar(termino:string){
    if(termino.length > 0)
      this.spotify.getSearchArtist(termino)
      .subscribe((data:any) =>{
        this.artistas = data;
      });
    else
      this.artistas = null
  }

}
