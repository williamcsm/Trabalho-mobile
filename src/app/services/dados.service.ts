import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private dados: any[];

  constructor() { }

  guardarDados(index: string, dados: any): boolean{ //guarda
    if (index){
      this.dados[index] = dados;
      return true;
    } else {
      return false;
    }
  }

  pegarDados(index: string): any{   //pega
    if(index) {
      return this.dados[index];
    } else {
      return null;
    }
  }

  deletarDados(index: string): boolean { //deleta
    return delete this.dados[index];
  }
}
