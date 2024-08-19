import { Component, OnInit } from '@angular/core';
import { CategoriaLibro } from '../../models/categoria.libro';
import { Libro } from '../../models/libro';
import { CategoriaLibroService } from '../../services/categoria.libro.service';
import { FormsModule } from '@angular/forms';
import { LibroService } from '../../services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consulta-libros.component.html',
  styleUrl: './consulta-libros.component.css'
})
export class ConsultaLibrosComponent implements OnInit{

  titulo : string = "";
  anio : number = 0;
  estado : boolean = true;
  idcategoria : number = 0;

  categoria : CategoriaLibro[] = [];

  libros : Libro[] = [];

  constructor(private categoriaService : CategoriaLibroService, private libroService : LibroService) {}

  ngOnInit(): void {
    this.categoriaService.categoriaLibroList().subscribe(x => {
      this.categoria = x;
    });
  }

  consultarLibro() {
    this.libroService.consultaLibros(this.titulo, this.anio, this.estado==true?1:0, this.idcategoria).subscribe(x => {
      Swal.fire({
        title: "Mensaje",
        text: x.mensaje,
        icon: "info"
      });
      this.libros = x.lista;
    });
  }
}
