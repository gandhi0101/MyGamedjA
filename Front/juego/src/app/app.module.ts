import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game/game.component';
import { PalyersComponent } from './game/palyers/palyers.component';
import { HomeComponent } from './site/home/home.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { EcenasComponent } from './game/ecenas/ecenas.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PalyersComponent,
    HomeComponent,
    NavbarComponent,
    EcenasComponent
  ],
  imports: [
    BrowserModule, 
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
