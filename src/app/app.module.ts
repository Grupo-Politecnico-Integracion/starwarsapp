import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPrincipalComponent } from './components/header-principal/header-principal.component';
import { FooterPrincipalComponent } from './components/footer-principal/footer-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPrincipalComponent,
    FooterPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
