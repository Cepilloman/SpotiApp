import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable(

)
export class SpotifyService {

  auth : string = "Bearer BQAoWSbxXXaRcGLcMJknf0KTbO0PKrsRM4G26lSvjOMUycO00b1ixN5TTHSP96VGZOwsejlVvaVTS_ITjNU";
  constructor( private http : HttpClient) {
    console.log("servicio iniciado")
   }

   getQuery(query : string ){
     const url = `https://api.spotify.com/v1/${ query }`;
     const headers = new HttpHeaders({
       'Authorization' : this.auth
     });
     return this.http.get(url ,{ headers });
   }

   getNewReleases(){
     return this.getQuery("browse/new-releases").pipe( map(data => {
        return data['albums'].items;
     }));
   }

   getArtistById(id:any){
     return this.getQuery(`artists/${ id }`);
   }

   getSearchArtist(termino : string){
     return this.getQuery(`search?query=${termino}&type=artist`)
     .pipe( map(data => data["artists"].items));

   }

   getTopTracks(id : string){
     return this.getQuery(`artists/${ id }/top-tracks?country=us`)
     .pipe( map( data => data["tracks"] ) );
   }

   /*updateToken(){
     const headers = new HttpHeaders({
       'grant_type'    : 'client_credentials',
       'client_id'     : '27c5dec4696a4db48ee227b80ab96bf6',
       'client_secret' : 'ac3ff06661bf4bd8958c3a382f91dcc9'
     });

     this.http.post("https://accounts.spotify.com/api/token",{ headers })
     .subscribe(data => {console.log(data)})
   }*/
}
