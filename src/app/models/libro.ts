import { CategoriaLibro } from "./categoria.libro";

export class Libro {
    idlibro?:number;
    titulo?:string;
    anio?:number;
    serie?:string;
    fecharegistro?:Date;
    estado?:number;
    categoriaLibro?:CategoriaLibro;
}
