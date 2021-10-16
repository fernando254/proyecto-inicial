import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina3PageRoutingModule } from './pagina3-routing.module';

import { Pagina3Page } from './pagina3.page';

import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina3PageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [Pagina3Page]
})
export class Pagina3PageModule {}
