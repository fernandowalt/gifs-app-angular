import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {
  get arrayGifs() {
    return this.gifsServices.gifs;
  }

  constructor(private gifsServices: GifsService) {}
}
