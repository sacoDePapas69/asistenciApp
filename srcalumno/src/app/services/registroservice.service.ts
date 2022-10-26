import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

export interface Usuario{
  nomUsuario: string;
  correoUsuario:string;
  passUsuario:string;
  repassUsuario: string; 
}

const USERS_KEY = 'my-usuarios';  

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {
  usuarios : Usuario[] = [];

  private _storage: Storage;

  constructor(private storage: Storage,private alertController: AlertController) { 
    this.init();
   }

   //creamos el storage de Usuarios
    async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //creamos un Usuario
  async addUsuario(dato: Usuario):Promise<any>{
    if(
    this.verif(dato.correoUsuario))
    {return;}
   return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
     if(datos){
       datos.push(dato);    //agregamos un objeto al storage
       return this.storage.set(USERS_KEY,datos);
     }
     else{
       return this.storage.set(USERS_KEY, [dato]);
     }
   })
  }//findelmetodo

  //obtener todos los objetos desde el storage 
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }

  async verif(email){
    this.getUsuarios().then(datos=>{ 
      this.usuarios = datos;
      for (let obj of this.usuarios){
        if (email == obj.correoUsuario){
          this.alertMsg();
          return false;
        }
      }
      return true;//findelfor
    })
  }


async alertMsg(){
  const alert = await this.alertController.create({
    header: 'Error...',
    message: 'Ya existe este correo',
    buttons: ['Aceptar']
  })
  await alert.present();
  return;
}

}