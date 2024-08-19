import { Routes } from '@angular/router';
import { ConsultaLibrosComponent } from './components/consulta-libros/consulta-libros.component';

export const routes: Routes = [
    {path: "consultaLibros", component: ConsultaLibrosComponent},
    {path: "", component: ConsultaLibrosComponent, pathMatch: "full"}
];
