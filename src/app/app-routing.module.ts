//Colocar as rotas da aplicação
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tabela',
    loadChildren: () => import('./pagina/tabela/tabela.module').then( m => m.TabelaPageModule)
  },
  {
    path: 'classificacao',
    loadChildren: () => import('./classificacao/classificacao.module').then( m => m.ClassificacaoPageModule)
  },
  {
    path: 'artilharia',
    loadChildren: () => import('./artilharia/artilharia.module').then( m => m.ArtilhariaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
