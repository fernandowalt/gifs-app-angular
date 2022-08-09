import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get queries() {
    return this.gifsServices.historial;
  }

  constructor(private gifsServices: GifsService) {}

  buscar(query: string) {


    this.gifsServices.buscarGifs(query);
  }
}
