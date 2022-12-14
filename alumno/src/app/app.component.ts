import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'construct-outline',
      name: 'Opciones',
      redirecTo: '/alert',
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo:'/action-sheet',
    },
    {
      icon: 'reader-outline',
      name: 'Informacion',
      redirecTo:'/card',
    },
/*    {
      icon: 'finger-print-outline',
      name: 'Formulario',
      redirecTo:'/inputs',
    },*/
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'chatbox-ellipses-outline',
      name: 'Comentarios',
      redirecTo:'/comentarios',
    }, 
    {
      icon: 'book-outline',
      name: 'Cursos',
      redirecTo:'/datos',
    },
    {
      icon: 'log-out-outline',
      name: 'Salir',
      redirecTo:'/logout',
    },
  ];




}
