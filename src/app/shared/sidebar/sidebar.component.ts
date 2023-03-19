
import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  constructor(private gifsServide: GifsService){}

  get historial() {
    return this.gifsServide.historial
  }
  buscar ( termino: string ) {

    this.gifsServide.buscarGifs( termino )
  }

}
