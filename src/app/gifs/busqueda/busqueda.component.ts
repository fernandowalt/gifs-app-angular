import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) {}

  busqueda(valor: string) {
    valor = valor.trim().toLocaleLowerCase();
    this.gifsServices.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
