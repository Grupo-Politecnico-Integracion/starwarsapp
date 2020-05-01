import { Component, OnInit } from '@angular/core';
//Importo la libreria para traer la lista de datos
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {


  listas: any[] = [];//Creo el arreglo para traer los datos del app.component
  datos: any[] = [];//Lista para datos del api con id

  //Variable del tipo app.component para traer los datos
  constructor(protected lista: AppComponent) { }


  ngOnInit(): void {
    this.listas = this.lista.stars//Traer datos de app.component y se lo asigno al array global listas

  }

  cargarStars() {
    var idTitulo: number = 0;
    this.datos = []

    this.listas.forEach(titulo => {

      //Lleno la lista con id, concateno variables para la imagen y los datos que retorna el API
      this.datos.push({
        id: idTitulo,
        imagen: idTitulo + titulo.title + '.jpg',
        titulo
      });

      idTitulo++;
    });

  }
}
