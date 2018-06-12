import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  loading:boolean;
  artistas: any[] = [];

  constructor(private spotify : SpotifyService ) {}

  buscar(termino:string){
    this.loading = true;
    if(termino.length > 0)
      this.spotify.getSearchArtist(termino)
      .subscribe((data:any) =>{
        this.artistas = data;
      });
    else
      this.artistas = null
      this.loading = false;
  }

}
