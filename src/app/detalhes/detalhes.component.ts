import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  imovelId: string;

  titulo: string = '';
  foto: string = 'https://i.ibb.co/ZXRhw3D/pngwing-com.png';

  description: string = 'O PlayStation 1 trouxe uma revolução aos videogames quando foi lançado pela Sony em 1994. Com gráficos inovadores e uma experiência imersiva, ele abriu novos horizontes no entretenimento digital.';
  description2: string = 'Seu catálogo diversificado apresentava uma ampla gama de gêneros, desde aventuras épicas como "Final Fantasy VII" até plataformas icônicas como "Crash Bandicoot". Jogos de terror como "Resident Evil" e corridas emocionantes em "Gran Turismo" também faziam parte da seleção.';
  description3: string = 'Esses jogos não apenas moldaram a indústria, mas também permanecem como clássicos adorados até hoje, lembrando-nos do impacto duradouro do PS1 na história dos videogames.';
  warnings: string = 'Nota: A disponibilidade e o preço estão sujeitos a alterações. Entre em contato conosco para mais informações e agendamento de visitas.';


  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.imovelId = params.get('id') ?? '';
    });
  }

}