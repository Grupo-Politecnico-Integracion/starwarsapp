import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { CarouselComponent } from './components/carousel/carousel.component';


const routes: Routes = [
  { path: '', component: CarouselComponent},
  { path: 'films', component: CatalogosComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
