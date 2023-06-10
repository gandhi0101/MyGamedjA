import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game!: { name: string; user: string; description:string; } | undefined;
  bPlay: boolean = false;
  constructor(private rutaActiva: ActivatedRoute) {
  }
  ngOnInit(): void {
   this.rutaActiva.paramMap.subscribe(params => {
    this.game = {
      name: this.rutaActiva.snapshot.params['juego'],
      user: this.rutaActiva.snapshot.params['usuario'],
      description: ''
      //user: this.rutaActiva.snapshot.params['usuario'] || "steve";
    };
    this.descripcion();
    this.bPlay=false;
   })
    //console.log(this.rutaActiva.snapshot.params['juego'])
  }
  play(): void {
    this.bPlay = true;
    console.log(this.bPlay)
  }
  descripcion():void{
    switch(this.game?.name){
      case 'Luchas':
        this.game.description = "Juego de luchas";
        break;
      case 'Tic Tac toe':
        this.game.description = "Juego de tic tac toe";
        break;
      default:
        console.log("Juego desconocido");
    }
  }
}
