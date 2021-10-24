import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  //La variable elRut es un controlador de un imput

  elRut = new FormControl('');
  elNombre = new FormControl('');
  contraseña = new FormControl('');

  //Para controlar los elemetos como grupo:
  //en el controlador de grupo se agregan las validaciones
  persona = new FormGroup({
    elRut : new FormControl('', Validators.required),
    elNombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contraseña : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  });

  //vamos a crear el boton para la accion graba

  lista_persona = new Array();
  perso : any;
  registrar(){
    //console.log('Comienzo proceso');
    //le entrgamos los valores del controlador del grupo perso
    this.perso = {
      rut : this.persona.controls.elRut.value,
      nombre : this.persona.controls.elNombre.value,
      contraseña : this.persona.controls.contraseña.value
    };
    console.log(this.perso);

    //le entregamos los valores de perso a la lista y lo agregamos con un push
    this.lista_persona.push(this.perso);

    //vamos a guardar los valores en una variable llamada localstore
    localStorage.setItem('datos', JSON.stringify(this.lista_persona));
    alert('Persona almacenada!')

    this.persona.controls.elRut.setValue('');
    this.persona.controls.elNombre.setValue('');
    this.persona.controls.contraseña.setValue('');
  }

  ingresar(){
    this.router.navigate(['/home'])
  }
}

