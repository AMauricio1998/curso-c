import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisesService) { }

  buscar( termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe( paises => {
        this.paises = paises;
      }, (err) => { 
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true; 
    
    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0, 5),
      (err) => this.paisesSugeridos = []
    );
  }

  buscarSugerido( termino: string) {
    this.buscar(termino)
  }
}
