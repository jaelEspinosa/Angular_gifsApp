import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private apiKey: string = 'h5t0VW2VdfQllpqpVe2KgXU41DRdqWo3'
private apiUrl: string = 'https://api.giphy.com/v1/gifs'

public resultados: Gif[] = []

private _historial: string[] = []

get historial (){
  return [...this._historial]
 }

 constructor (private http: HttpClient ){


    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []


 }

buscarGifs(query:string) {

  query = query.trim().toLowerCase()

  if(!this._historial.includes( query )){
    this._historial.unshift( query )
    this._historial = this._historial.splice(0, 15)
    localStorage.setItem("historial",JSON.stringify(this._historial))

  }

  const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('api_url', this.apiUrl)
      .set('limit', '10')
      .set('q', query);


  this.http.get<SearchGifsResponse>(`${ this.apiUrl }/search`, { params })
      .subscribe( resp =>{
        this.resultados = resp.data

        localStorage.setItem("resultados", JSON.stringify(this.resultados))
      })

}

}
