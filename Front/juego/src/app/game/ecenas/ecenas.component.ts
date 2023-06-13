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

    let casilla = event.target.id;
    if (this.tablero[casilla - 1] !== 'O') {
      switch (casilla) {
        case '01':
          this.tablero[0] = 'X';
          break;
        case '02':
          this.tablero[1] = 'X';
          break;
        case '03':
          this.tablero[2] = 'X';
          break;

        case '04':
          this.tablero[3] = 'X';
          break;
        case '05':
          this.tablero[4] = 'X';
          break;
        case '06':
          this.tablero[5] = 'X';
          break;

        case '07':
          this.tablero[6] = 'X';
          break;
        case '08':
          this.tablero[7] = 'X';
          break;
        case '09':
          this.tablero[8] = 'X';
          break;

      }
      this.jugador = false;
    }

  }
  jugador2(event: any): void {
    let casilla = event.target.id;
    console.log(casilla)
    if (this.tablero[casilla - 1] !== 'X') {
      switch (casilla) {
        case '01':
          this.tablero[0] = 'O';
          break;
        case '02':
          this.tablero[1] = 'O';
          break;
        case '03':
          this.tablero[2] = 'O';
          break;

        case '04':
          this.tablero[3] = 'O';
          break;
        case '05':
          this.tablero[4] = 'O';
          break;
        case '06':
          this.tablero[5] = 'O';
          break;
        case '07':
          this.tablero[6] = 'O';
          break;
        case '08':
          this.tablero[7] = 'O';
          break;
        case '09':
          this.tablero[8] = 'O';
          break;

      }
      this.jugador = true;
    }
  }


}
