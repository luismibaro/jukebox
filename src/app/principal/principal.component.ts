import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
  cancion: string ="";
  autor: string ="";
  formato: string ="";
  cancionesRegistradas:  {cancion: string, autor: string, formato: string}[] = [];

  formatosDeArchivo = ['mp3','wav','ogg'];

  enviar(){
    const nuevaCancion = {
      cancion: this.cancion,
      autor: this.autor,
      formato: this.formato
    };
    this.cancionesRegistradas.push(nuevaCancion);
    this.cancion = '';
    this.autor = '';
    this.formato = '';
  }

  constructor(){ }

  ngOnInit(): void{
  }
}
