import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  elNombre = new FormControl('');
  contraseña = new FormControl('');

  persona = new FormGroup({
    elNombre : new FormControl(''),
    contraseña : new FormControl('')

  })

}
