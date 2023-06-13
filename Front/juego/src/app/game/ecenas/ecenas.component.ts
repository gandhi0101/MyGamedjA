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

    if (this.tablero[0] == jugador && this.tablero[1] == jugador && this.tablero[2] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);

      return true;
    }
    if (this.tablero[3] == jugador && this.tablero[4] == jugador && this.tablero[5] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;
      
    }
    if (this.tablero[6] == jugador && this.tablero[7] == jugador && this.tablero[8] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;

    }



    if (this.tablero[0] == jugador && this.tablero[3] == jugador && this.tablero[6] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;

    }
    if (this.tablero[1] == jugador && this.tablero[4] == jugador && this.tablero[7] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;

    }
    if (this.tablero[2] == jugador && this.tablero[5] == jugador && this.tablero[8] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;

    }



    if (this.tablero[0] == jugador && this.tablero[4] == jugador && this.tablero[8] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;

    }
    if (this.tablero[2] == jugador && this.tablero[4] == jugador && this.tablero[6] == jugador) {
      //alert("Ganador ");
      //console.log(`ganaste`);
      return true;

    }
    return false;
  }


}
