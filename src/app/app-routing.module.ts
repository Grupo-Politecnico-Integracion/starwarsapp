import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosComponent } from './components/catalogos/catalogos.component';

// Add CMS 18.04.2020 Anexo ruta para especificaciones
import { EspecificacionesComponent } from './especificaciones/especificaciones.component';
// Fin Add Anexo ruta para especificaciones CMS 18.04.2020


const routes: Routes = [
  { path: 'films', component: CatalogosComponent},

  // Add PATH para especificaciones CMS 18.04.2020
  { path: 'descripFilms', component: EspecificacionesComponent},
  // Fin Add PATH para especificaciones CMS 18.04.2020 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
