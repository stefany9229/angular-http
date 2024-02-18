import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from './models/answer.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl: string = " ";

  constructor(private _http: HttpClient) { }

  obtenerRespuesta() {
    return this._http.get<Answer>(this.apiUrl);
  }

}

