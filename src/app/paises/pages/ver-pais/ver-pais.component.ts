import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country, Translation } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisesService.getPaisCode(id)),
        tap( console.log )
      )
      .subscribe( pais => {
        this.pais = pais[0]
      })
    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     this.pisesService.getPaisCode(id)
    //       .subscribe( pais => {
    //         console.log(pais)
    //       })
    //   })
  }
  
}
