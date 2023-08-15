import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, NgFor, NgIf, CommonModule ],
})
export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(jogoId: string) {
    this.router.navigate(['/detalhes', jogoId]);
  }

  toogleFavorito(index: number): void {
    this.jogos[index].favorito = !this.jogos[index].favorito
  }


  nome: string = 'Gustavo';
  sobrenome: string = 'Sotrati';
  data: any = new Date();
  jogos: Array<any> = [
    {
      id: 1,
      titulo: 'ALIEN TRILOGY',
      foto: 'https://i.ibb.co/JChHpJf/Alien-Trilogy.jpg',
      lancamento: '29/02/1996',
      genero: 'FPS',
      estudio: 'Fox Interactive',
      favorito: false
    },
    {
      id: 2,
      titulo: 'MORTAL KOMBAT TRILOGY',
      foto: 'https://i.ibb.co/bRTH5qD/Mortal-Kombat-Trilogy.jpg',
      lancamento: '10/10/1996',
      genero: 'Luta',
      estudio: 'Midway Games',
      favorito: false
    },
    {
      id: 3,
      titulo: 'DISNEYS HERCULES',
      foto: 'https://i.ibb.co/hyNf5B7/Disney-s-Hercules.jpg',
      lancamento: '03/07/1997',
      genero: 'Plataforma',
      estudio: 'Disney Interactive',
      favorito: false
    },
    {
      id: 4,
      titulo: 'NIGHTMARE CREATURES',
      foto: 'https://i.ibb.co/TrtjWM9/Nightmare-Creatures.jpg',
      lancamento: '30/09/1997',
      genero: 'Terror',
      estudio: 'Activision',
      favorito: false
    },
    {
      id: 5,
      titulo: 'MORTAL KOMBAT MYTHOLOGIES SUB-ZERO',
      foto: 'https://i.ibb.co/zxvpHNg/Mortal-Kombat-Mythologies-Sub-Zero.jpg',
      lancamento: '01/10/1997',
      genero: 'Luta',
      estudio: 'Midway Games',
      favorito: false
    },
    {
      id: 6,
      titulo: 'RAMPAGE WORLD TOUR',
      foto: 'https://i.ibb.co/zs3yC9s/Rampage-World-Tour.jpg',
      lancamento: '21/10/1997',
      genero: 'Ação',
      estudio: 'Midway Games',
      favorito: false
    },
  ];
}