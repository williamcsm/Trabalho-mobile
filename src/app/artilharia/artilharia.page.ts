import { InfoArtilharia } from './../models/InfoArtilharia.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artilharia',
  templateUrl: './artilharia.page.html',
  styleUrls: ['./artilharia.page.scss'],
})
export class ArtilhariaPage implements OnInit {

titulo= 'teste';

  artilheiros: InfoArtilharia[] = [
    {
      nome: 'William JR',
      gols: 19,
    },
    {
      nome: 'Rodrigo Furts',
      gols: 15,
    },
    {
      nome: 'Luiz Felipe',
      gols: 11,
    },
    {
      nome: 'Matheus Reis',
      gols: 8,
    },
    {
      nome: 'Caio Ribeiro',
      gols: 6,
    },
    {
      nome: 'Fernando Merched',
      gols: 5,
    },
    {
      nome: 'Lorenzo Gonzada',
      gols: 4,
    },
    {
      nome: 'Felipe Lima',
      gols: 3,
    },
    {
      nome: 'Gustavo Ribeiro',
      gols: 1,
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
