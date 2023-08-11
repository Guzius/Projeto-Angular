import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent implements OnInit {

  imovelId: string;

  titulo: string = '';
  foto: string = 'https://i.ibb.co/28Cmz6g/7d85cdabd079641f5c36a71042107e97.jpg';

  description: string = 'Explore o mundo nostálgico dos jogos do PlayStation 1 em nosso site dedicado a esses clássicos icônicos. Descubra uma coleção selecionada dos melhores jogos da era dourada dos videogames.';
  description2: string = 'O QUE OFERECEMOS:';
  description3: string = 'CATÁLOGO COMPLETO:';
  description4: string = 'Encontre jogos de diversos gêneros, de aventuras a RPGs, todos em um só lugar.';
  description5: string = 'ANÁLSIES DETALHADAS:';
  description6: string = 'Saiba mais sobre cada jogo, com sinopses, avaliações e informações gráficas.';
  description7: string = 'COMUNIDADE ATIVA:';
  description8: string = 'Conecte-se com outros fãs, participe de discussões e compartilhe suas memórias.';
  description9: string = 'Reviva a magia do PlayStation 1 em RetroPlayStation1.com e mergulhe na nostalgia dos clássicos que marcaram época.';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
    });
  }
  
}