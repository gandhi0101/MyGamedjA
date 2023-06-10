import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { GameComponent } from './game/game/game.component';
import { EcenasComponent } from './game/ecenas/ecenas.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  {
    path: 'game/:juego', component: GameComponent, children: [
      { path: 'ecenasGame', component: EcenasComponent, outlet: 'ecenasOutlet' },
    ]
  },
  //{ path: '**', redirectTo: '/home', pathMatch: 'full' },

  { path: '', redirectTo: 'default-ecena', pathMatch: 'full' },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
