import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

/* con este decorador accedemos al elemento input con la ref txtBuscar */

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  constructor(private gifsServide: GifsService){}

  buscar (  ) {
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length === 0 ) return;

    this.gifsServide.buscarGifs( valor )

    this.txtBuscar.nativeElement.value = ''
  }


/* En el metodo buscar(), accedemos a dicho elemento y lo manipulamos a nuestro antojo */


}


