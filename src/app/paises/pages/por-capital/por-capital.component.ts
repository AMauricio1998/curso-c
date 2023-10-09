import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }

  buscar( termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( termino )
      .subscribe( paises => {
        this.paises = paises;
      }, (err) => { 
        this.hayError = true;
        this.paises = [];
      });
  }
}
