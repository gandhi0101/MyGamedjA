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
 

  ngOnInit(): void {
    //this.changeBodyStyle();
    this.juego = this.route.snapshot.params['juego'];
    console.log(this.juego);
  }

  changeBodyStyle(): void {
    const componentElement = this.elementRef.nativeElement;
    this.renderer.setStyle(componentElement, 'background-color', 'black');
    this.renderer.setStyle(componentElement, 'color', 'white');
  }


}
