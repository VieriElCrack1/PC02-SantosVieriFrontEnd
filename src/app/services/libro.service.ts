import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Api } from '../api';

const url = Api.API + "/libro";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http : HttpClient) { }

  consultaLibros(titulo : string, anio : number, estado : number, idcategoria : number) : Observable<any> {
    let parametros = new HttpParams().set("titulo", titulo).set("anio", anio).set("estado", estado).set("idcategoria", idcategoria);
    return this.http.get<any>(url + "/consultaLibro", {params: parametros});
  }

}
