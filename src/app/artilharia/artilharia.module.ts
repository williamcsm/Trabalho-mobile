import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtilhariaPageRoutingModule } from './artilharia-routing.module';

import { ArtilhariaPage } from './artilharia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtilhariaPageRoutingModule
  ],
  declarations: [ArtilhariaPage]
})
export class ArtilhariaPageModule {}
