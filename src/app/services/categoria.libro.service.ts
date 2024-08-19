import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api';
import { Observable } from 'rxjs';
import { CategoriaLibro } from '../models/categoria.libro';

const url = Api.API + "/categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaLibroService {

  constructor(private http : HttpClient) { }

  categoriaLibroList() : Observable<CategoriaLibro[]> {
    return this.http.get<CategoriaLibro[]>(url + "/listaLibroCategoria");
  }
}
