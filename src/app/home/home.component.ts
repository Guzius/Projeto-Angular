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
      titulo: 'HERCULES',
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
    {
      id: 7,
      titulo: 'TOMB RAIDER II',
      foto: 'https://i.ibb.co/dPF5W5r/Tomb-Raider-II.jpg',
      lancamento: '21/11/1997',
      genero: 'Ação',
      estudio: 'Eidos Interactive',
      favorito: false
    },
    {
      id: 8,
      titulo: 'MORTAL KOMBAT 4',
      foto: 'https://i.ibb.co/8XLdyGg/Mortal-Kombat-4.jpg',
      lancamento: '24/06/1998',
      genero: 'Luta',
      estudio: 'Midway Games',
      favorito: false
    },
    {
      id: 9,
      titulo: 'THE LOST WORLD: JURASSIC PARK',
      foto: 'https://i.ibb.co/T1QcQw6/The-Lost-World-Jurassic-Park.jpg',
      lancamento: '23/09/1998',
      genero: 'Ação',
      estudio: 'DreamWorks Interactive',
      favorito: false
    },
    {
      id: 10,
      titulo: 'NINJA: SHADOW OF DARKNESS',
      foto: 'https://i.ibb.co/CskNVQY/Ninja-Shadow-of-Darkness.jpg',
      lancamento: '08/10/1998',
      genero: 'Ação',
      estudio: 'Eidos Interactive',
      favorito: false
    },
    {
      id: 11,
      titulo: 'TOMB RAIDER III: ADVENTURES OF LARA CROFT',
      foto: 'https://i.ibb.co/LpzLmnS/Tomb-Raider-III-Adventures-of-Lara-Croft.jpg',
      lancamento: '20/11/1998',
      genero: 'Ação',
      estudio: 'Eidos Interactive',
      favorito: false
    },
    {
      id: 12,
      titulo: 'SILENT HILL',
      foto: 'https://i.ibb.co/8sg7mb1/Silent-Hill.jpg',
      lancamento: '23/02/1999',
      genero: 'Terror',
      estudio: 'Konami',
      favorito: false
    },
    {
      id: 13,
      titulo: 'PEPSIMAN',
      foto: 'https://i.ibb.co/Hx7YH5D/Pepsiman.jpg',
      lancamento: '04/03/1999',
      genero: 'Ação',
      estudio: 'KID',
      favorito: false
    },
    {
      id: 14,
      titulo: 'RAMPAGE 2: UNIVERSAL TOUR',
      foto: 'https://i.ibb.co/RNstgqY/Rampage-2-Universal-Tour.jpg',
      lancamento: '31/03/1999',
      genero: 'Ação',
      estudio: 'Midway Games',
      favorito: false
    },
    {
      id: 15,
      titulo: 'TARZAN',
      foto: 'https://i.ibb.co/kKB0C0k/Disney-s-Tarzan.jpg',
      lancamento: '30/06/1999',
      genero: 'Plataforma',
      estudio: 'Disney Interactive',
      favorito: false
    },
    {
      id: 16,
      titulo: 'DINO CRISIS',
      foto: 'https://i.ibb.co/42dBRLx/Dino-Crisis.jpg',
      lancamento: '01/07/1999',
      genero: 'Terror',
      estudio: 'Capcom',
      favorito: false
    },
    {
      id: 17,
      titulo: 'HOT WHEELS TURBO RACING',
      foto: 'https://i.ibb.co/Dgdwkx7/Hot-Wheels-Turbo-Racing.jpg',
      lancamento: '31/08/1999',
      genero: 'Corrida',
      estudio: 'Electronic Arts',
      favorito: false
    },
    {
      id: 18,
      titulo: 'METAL GEAR SOLID',
      foto: 'https://i.ibb.co/Zh9Ydsx/Metal-Gear-Solid.jpg',
      lancamento: '12/10/1999',
      genero: 'Ação',
      estudio: 'Konami',
      favorito: false
    },
    {
      id: 19,
      titulo: 'PAC-MAN WORLD',
      foto: 'https://i.ibb.co/2KTK7YW/Pac-Man-World.jpg',
      lancamento: '15/10/1999',
      genero: 'Plataforma',
      estudio: 'Namco',
      favorito: false
    },
    {
      id: 20,
      titulo: 'METAL OF HONOR',
      foto: 'https://i.ibb.co/vqRY28D/Medal-of-Honor.jpg',
      lancamento: '10/11/1999',
      genero: 'FPS',
      estudio: 'Electronic Arts',
      favorito: false
    },
    {
      id: 21,
      titulo: 'WARPATH: JURASSIC PARK',
      foto: 'https://i.ibb.co/qdpL92y/Warpath-Jurassic-Park.jpg',
      lancamento: '17/11/1999',
      genero: 'Luta',
      estudio: 'Electronic Arts',
      favorito: false
    },
    {
      id: 22,
      titulo: 'TOY STORY 2: BUZZ LIGHTYEAR TO THE RESCUE',
      foto: 'https://i.ibb.co/m0H2BfB/Toy-Story-2-Buzz-Lightyear-to-the-Rescue.jpg',
      lancamento: '16/11/1999',
      genero: 'Plataforma',
      estudio: 'Disney Interactive',
      favorito: false
    },
    {
      id: 23,
      titulo: 'TOMB RAIDER: THE LAST REVELATION',
      foto: 'https://i.ibb.co/KFgB4kZ/Tomb-Raider-The-Last-Revelation.jpg',
      lancamento: '24/11/1999',
      genero: 'Ação',
      estudio: 'Eidos Interactive',
      favorito: false
    },
    {
      id: 24,
      titulo: 'JACKIE CHAN STUNTMASTER',
      foto: 'https://i.ibb.co/Sr2L36W/Jackie-Chan-s-Stuntmaster.jpg',
      lancamento: '28/03/2000',
      genero: 'Plataforma',
      estudio: 'Midway Games',
      favorito: false
    },
    {
      id: 25,
      titulo: 'NIGHTMARE CREATURES II',
      foto: 'https://i.ibb.co/VY5B0q8/Nightmare-Creatures-II.jpg',
      lancamento: '23/05/2000',
      genero: 'Terror',
      estudio: 'Konami',
      favorito: false
    },
    {
      id: 26,
      titulo: 'RAMPAGE THROUGH TIME',
      foto: 'https://i.ibb.co/LRb7cMC/Rampage-Through-Time.jpg',
      lancamento: '20/06/2000',
      genero: 'Ação',
      estudio: 'Midway Games',
      favorito: false
    },
    {
      id: 27,
      titulo: 'SPIDER-MAN',
      foto: 'https://i.ibb.co/Cnzc6s5/Spider-Man.jpg',
      lancamento: '01/08/2000',
      genero: 'Ação',
      estudio: 'Activision',
      favorito: false
    },
    {
      id: 28,
      titulo: 'DINO CRISIS 2',
      foto: 'https://i.ibb.co/VmpKmd7/Dino-Crisis-2.jpg',
      lancamento: '20/08/2000',
      genero: 'Ação',
      estudio: 'Capcom',
      favorito: false
    },
    {
      id: 29,
      titulo: 'RESIDENT EVIL SURVIVOR',
      foto: 'https://i.ibb.co/fq2kqMW/Resident-Evil-Survivor.jpg',
      lancamento: '30/08/2000',
      genero: 'Terror',
      estudio: 'Capcom',
      favorito: false
    },
    {
      id: 30,
      titulo: 'ALIEN RESURRECTION',
      foto: 'https://i.ibb.co/g9JfpLw/Alien-Resurrection.jpg',
      lancamento: '20/10/2000',
      genero: 'Terror',
      estudio: 'Fox Interactive',
      favorito: false
    },
    {
      id: 31,
      titulo: 'MEDAL OF HONOR: UNDERGROUND',
      foto: 'https://i.ibb.co/2y6X07c/Medal-of-Honor-Underground.jpg',
      lancamento: '24/10/2000',
      genero: 'FPS',
      estudio: 'Electronic Arts',
      favorito: false
    },
    {
      id: 32,
      titulo: 'TOMB RAIDER CHRONICLES',
      foto: 'https://i.ibb.co/k8scZ2G/Tomb-Raider-Chronicles.jpg',
      lancamento: '17/11/2000',
      genero: 'Ação',
      estudio: 'Eidos Interactive',
      favorito: false
    },
    {
      id: 33,
      titulo: 'EVIL DEAD: HAIL TO THE KING',
      foto: 'https://i.ibb.co/6N88cRs/Evil-Dead-Hail-to-the-King.jpg',
      lancamento: '05/12/2000',
      genero: 'Terror',
      estudio: 'THQ',
      favorito: false
    },
    {
      id: 34,
      titulo: 'THE LION KING: SIMBA MIGHTY ADVENTURE',
      foto: 'https://i.ibb.co/s9WVdQy/Disney-s-The-Lion-King-Simba-s-Mighty-Adventure.jpg',
      lancamento: '22/12/2000',
      genero: 'Plataforma',
      estudio: 'Disney Interactive',
      favorito: false
    },
    {
      id: 34,
      titulo: 'ALADDIN IN NASIRA REVENGE',
      foto: 'https://i.ibb.co/847kDpk/Disney-s-Aladdin-in-Nasira-s-Revenge.jpg',
      lancamento: '14/03/2001',
      genero: 'Plataforma',
      estudio: 'Disney Interactive',
      favorito: false
    },
    {
      id: 36,
      titulo: 'SPIDER-MAN 2: ENTER ELECTRO',
      foto: 'https://i.ibb.co/C6yNvSm/Spider-Man-2-Enter-Electro.jpg',
      lancamento: '18/10/2001',
      genero: 'Ação',
      estudio: 'Activision',
      favorito: false
    },
  ];
}