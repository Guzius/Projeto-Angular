import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtoId: string;

  titulo: string = '';
  foto: string = 'https://i.ibb.co/ykbrBRF/710791.png';

  description: string = 'SmartPRO 4K HD';
  description2: string = 'Experimente a excelência em qualidade de imagem com resolução 4K deslumbrante. Com conectividade avançada e recursos inteligentes intuitivos, o SmartPRO leva seu entretenimento a novas alturas. Navegue facilmente por filmes, séries e jogos usando o controle remoto ergonômico. Eleve sua experiência visual com o SmartPRO 4K HD, onde a inovação encontra a diversão!';

  titulo2: string = '';
  foto2: string = 'https://i.ibb.co/VJ5qMBV/stick-1-2.png';

  description3: string = 'Game Stick 4K HD';
  description4: string = 'Leve a emoção dos jogos para qualquer lugar com o Game Stick. Este dispositivo compacto e poderoso cabe no seu bolso, mas oferece uma experiência de jogo épica. Conecte-o à sua TV ou monitor e mergulhe em jogos de alta qualidade. Com controles intuitivos e uma biblioteca diversificada de jogos, o Game Stick é a porta de entrada para aventuras inesquecíveis, onde quer que você esteja!';

  titulo3: string = '';
  foto3: string = 'https://i.ibb.co/4YQBqFk/PSX-Console-w-Controller.png';

  description5: string = 'PlayStation';
  description6: string = 'Prepare-se para uma jornada de entretenimento sem limites com o PlayStation. Com gráficos de última geração, jogos empolgantes e uma comunidade online vibrante, o PlayStation oferece uma experiência de jogo incomparável. Domine mundos virtuais, compita com amigos e desfrute de uma diversidade de experiências multimídia. Descubra por que o PlayStation continua a definir o padrão para o universo dos jogos eletrônicos.';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.produtoId = params.get('id') ?? '';
    });
  }
  
}