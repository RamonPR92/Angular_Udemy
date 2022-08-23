import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gif.inteface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private gifUrl: string = 'http://api.giphy.com/v1/gifs';
  private apiKey: string = 'y2wVvnZhWCgjMVOILv5ZyIvDmRpMCt6O';

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    //recupera los datos del local storage
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs(query: string) {

    query = query.trim().toUpperCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', 10)
    .set('q', query);


    this.http.get<SearchGIFResponse>(`${this.gifUrl}/search`, {params})
      .subscribe((response) => {
        this.resultados = response.data;
        //guarda el historial en el local storage
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
