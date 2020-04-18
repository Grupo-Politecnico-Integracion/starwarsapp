import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosComponent } from './components/catalogos/catalogos.component';




const routes: Routes = [
  { path: 'films', component: CatalogosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
