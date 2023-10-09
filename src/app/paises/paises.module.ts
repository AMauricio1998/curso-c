import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisesTablaComponent } from './components/paises-tabla/paises-tabla.component';
import { PaisesInputComponent } from './components/paises-input/paises-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisesTablaComponent,
    PaisesInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    HttpClientModule,
    PorRegionComponent,
    VerPaisComponent
  ]
})
export class PaisesModule { }
