import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'oceania', 'europe'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor( private paisesService: PaisesService) { }

  getClaseCSS( region: string): string {
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activarRegion( region: string) {
    
    if (region === this.regionActiva) {
      return;
    }

    this.hayError = false;
    this.regionActiva = region;
    this.paises = [];

    this.paisesService.buscarRegion( region )
      .subscribe( paises => {
        this.paises = paises;
      }, (err) => { 
        this.hayError = true;
        this.paises = [];
      });
  }
}
