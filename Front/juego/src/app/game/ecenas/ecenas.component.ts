import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-ecenas',
  templateUrl: './ecenas.component.html',
  styleUrls: ['./ecenas.component.scss']
})
export class EcenasComponent implements OnInit {
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private elementRef: ElementRef) {

  }
  juego!: any;
  jugador: boolean = true;
  tablero: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

  ngOnInit(): void {
    //this.changeBodyStyle();
    this.route.paramMap.subscribe(params => {
      this.juego = params;
      //console.log(this.juego);
    });
    //console.log(this.juego);
  }

  /*changeBodyStyle(): void {
    const componentElement = this.elementRef.nativeElement;
    this.renderer.setStyle(componentElement, 'background-color', 'black');
    this.renderer.setStyle(componentElement, 'color', 'white');
  }*/
  jugador1(event: any): void {
    const casilla = event.target.id;
    if (this.tablero[casilla - 1] !== 'O' && this.tablero[casilla - 1] !== 'X' && !this.ganador('X')) {
      this.llenarTablero(casilla, 'X');
      this.jugador = false;
      console.log('jugador 1');
    }
  }

  jugador2(event: any): void {
    const casilla = event.target.id;
    if (this.tablero[casilla - 1] !== 'X' && this.tablero[casilla - 1] !== 'O' && !this.ganador('X')) {
      this.llenarTablero(casilla, 'O');
      this.jugador = true;
      console.log('jugador 2');
    }
  }

  llenarTablero(casilla: string, jugador: 'X' | 'O'): void {
    const indice = parseInt(casilla) - 1;
    this.tablero[indice] = jugador;
    //console.log(this.ganador(jugador)? ''+this.ganador(jugador) : '');
  }
  ganador(jugador: 'X' | 'O'): boolean{

    const combinacionesGanadoras = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Combinaciones horizontales
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Combinaciones verticales
      [0, 4, 8], [2, 4, 6]             // Combinaciones diagonales
    ];
  
    for (const combinacion of combinacionesGanadoras) { //recorremos el array combinacionesGanadoras
      if (//validamos cada una de las combinaciones por la posicion del sub array 
        this.tablero[combinacion[0]] === jugador &&
        this.tablero[combinacion[1]] === jugador &&
        this.tablero[combinacion[2]] === jugador
      ) {
        return true;
      }
    }
  
    return false;
  }


}
