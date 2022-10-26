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
      redirecTo: '/opciones',
    },
    {
      icon: 'reader-outline',
      name: 'Informacion',
      redirecTo: '/informacion',
    },
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/qr',
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },
    {
      icon: 'logo-buffer',
      name: 'Cursos',
      redirecTo:'/datos',
    },
    {
      icon: 'log-out-outline',
      name: 'Salir',
      redirecTo:'/logout',
    },
  ]
}
