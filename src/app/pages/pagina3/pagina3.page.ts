import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  qrData = "https://moovitapp.com/santiago-642/poi/Duoc%20Puente%20Alto/Ubicaci%C3%B3n%20elegida/es-419?tll=-33.598546_-70.578977&fll=-33.608972_-70.575914&customerId=4908&ref=1&poiType=egsite";

  elementType : 'url' | 'img' | 'canvas' = 'canvas';

  constructor(private barCodeScanner:BarcodeScanner,
                       private base64ToGallery:Base64ToGallery) { }

  ngOnInit() {
  }

}
