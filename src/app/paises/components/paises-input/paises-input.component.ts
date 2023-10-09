import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
  styleUrls: ['./paises-input.component.css']
})
export class PaisesInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeHolder: string = "";

  debouncer: Subject<string> = new Subject();

  termino: string = "";

  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( valor => {
        this.onDebounce.emit( valor );
      });
  }

  buscar() {
    this.onEnter.emit( this.termino );
  }
  
  teclaPresionada( event: any) {
    this.debouncer.next( this.termino );
  }
} 
