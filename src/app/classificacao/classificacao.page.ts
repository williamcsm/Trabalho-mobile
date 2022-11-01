import { Component, OnInit } from '@angular/core';
import { InfoTime } from '../models/InfoTime.models';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.page.html',
  styleUrls: ['./classificacao.page.scss'],
})
export class ClassificacaoPage implements OnInit {

  times: InfoTime[] = [
    {
    nome: 'Atletico',
    pontos: 74,
    jogos: 34,
    vitorias: 21,
    empates: 11,
    derrotas: 2,
    golsPro: 59,
    saldoDeGols: 37,
    },
    {
      nome: 'America',
      pontos: 64,
      jogos: 34,
      vitorias: 17,
      empates: 13,
      derrotas: 4,
      golsPro: 52,
      saldoDeGols: 22,
      },
      {
        nome: 'Flamengo',
        pontos: 61,
        jogos: 34,
        vitorias: 18,
        empates: 7,
        derrotas: 9,
        golsPro: 56,
        saldoDeGols: 24,
        },
        {
          nome: 'Palmeiras',
          pontos: 61,
          jogos: 35,
          vitorias: 18,
          empates: 7,
          derrotas: 10,
          golsPro: 56,
          saldoDeGols: 16,
          },
          {
            nome: 'Fortaleza',
            pontos: 58,
            jogos: 34,
            vitorias: 16,
            empates: 10,
            derrotas: 8,
            golsPro: 39,
            saldoDeGols: 7,
            }
  ];

  constructor() { }

  ngOnInit() {
  }

}
