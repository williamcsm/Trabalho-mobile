// Arquivo TS principal
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Tabela De Jogos', url: '/tabela', icon: 'calendar' },
    { title: 'Classificação', url: '/classificacao', icon: 'trophy' },
    { title: 'Artilharia', url: '/artilharia', icon: 'football' },
  ];
  public labels = ['Instagram', 'Facebook', 'Twitter'];
  constructor() {}
}
