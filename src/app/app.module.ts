import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Adición de la dependencia para cliente HTTP CMS 20.04.2020
import { HttpClientModule} from '@angular/common/http'; 

// Importo el servicio CMS 20.04.2020
import { StarwarsApiService } from './starwars-api.service';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPrincipalComponent } from './components/header-principal/header-principal.component';
import { CatalogosComponent } from './components/catalogos/catalogos.component';
import { EspecificacionesComponent } from './especificaciones/especificaciones.component';
import { FooterPrincipalComponent } from './components/footer-principal/footer-principal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchPipe } from './pipes/search.pipe';

// Importo libreria para el manejo de los formularios a través del ngModel en un imput CMS 27.04.2020
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderPrincipalComponent,
    CatalogosComponent,
    EspecificacionesComponent,
    FooterPrincipalComponent,
    CarouselComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // Para manejo de formularios CMS 27.04.2020
    FormsModule
  ],
  // Adiciono el servicio al array CMS 20.04.2020
  providers: [StarwarsApiService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
