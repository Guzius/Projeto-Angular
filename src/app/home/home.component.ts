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
      quartos: 4,
      banheiros: 3,
      area: 360,
      preco: 990000,
      favorito: true
    },
    {
      id: 2,
      titulo: 'MORTAL KOMBAT TRILOGY',
      foto: 'https://i.ibb.co/bRTH5qD/Mortal-Kombat-Trilogy.jpg',
      quartos: 2,
      banheiros: 1,
      area: 45,
      preco: 120000,
      favorito: false
    },
    {
      id: 3,
      titulo: 'DISNEYS HERCULES',
      foto: 'https://i.ibb.co/hyNf5B7/Disney-s-Hercules.jpg',
      quartos: 7,
      banheiros: 5,
      area: 800,
      preco: 1500000,
      favorito: false
    },
    {
      id: 4,
      titulo: 'RAMPAGE WORLD TOUR',
      foto: 'https://i.ibb.co/zs3yC9s/Rampage-World-Tour.jpg',
      quartos: 1,
      banheiros: 1,
      area: 36,
      preco: 180000,
      favorito: false
    },
    {
      id: "5",
      titulo: 'MORTAL KOMBAT MYTHOLOGIES SUB-ZERO',
      foto: 'https://i.ibb.co/zxvpHNg/Mortal-Kombat-Mythologies-Sub-Zero.jpg',
      quartos: 0,
      banheiros: 1,
      area: 25,
      preco: 250000,
      favorito: true
    },
    {
      id: "6",
      titulo: 'NIGHTMARE CREATURES',
      foto: 'https://i.ibb.co/TrtjWM9/Nightmare-Creatures.jpg',
      quartos: 3,
      banheiros: 3,
      area: 200,
      preco: 1500000,
      favorito: true
    }
  ];
}