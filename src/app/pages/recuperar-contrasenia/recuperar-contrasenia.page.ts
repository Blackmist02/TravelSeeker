import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Para mostrar alertas

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.page.html',
  styleUrls: ['./recuperar-contrasenia.page.scss'],
})
export class RecuperarContraseniaPage implements OnInit {

  loginusuario: string = '';  // Para almacenar el identificador del usuario
  logincontrasenia: string = '';  // Para almacenar la nueva contraseña
  loginVerificarContrasenia: string = '';  // Para confirmar la nueva contraseña
  usuarios: any[] = [];  // Almacena los usuarios del JSON

  constructor(private http: HttpClient, private alertController: AlertController, private router: Router ) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  // Función que carga los usuarios desde el archivo JSON
  cargarUsuarios() {
    this.http.get<any>('assets/datos.json').subscribe(data => {
      this.usuarios = data.usuarios;
      console.log('Usuarios cargados:', this.usuarios);
    }, error => {
      console.error('Error al cargar los usuarios:', error);
    });
  }

  // Función para cambiar la contraseña
  async cambiarContrasenia() {
    // Verificar que las contraseñas coincidan
    if (this.logincontrasenia !== this.loginVerificarContrasenia) {
      this.mostrarAlerta('Error', 'Las contraseñas no coinciden');
      return;
    }
  
    // Buscar el usuario por el nombre o identificador ingresado (ignorando mayúsculas/minúsculas)
    const usuario = this.usuarios.find(u => u.nombre.toLowerCase() === this.loginusuario.toLowerCase());
  
    console.log('Usuario encontrado:', usuario);
    if (usuario) {
      // Cambiar la contraseña del usuario
      usuario.contrasenia = this.logincontrasenia;
      console.log('Contraseña cambiada', usuario);
      this.mostrarAlerta('Éxito', 'La contraseña ha sido cambiada correctamente');
      this.router.navigate(['/login']);
    } else {
      this.mostrarAlerta('Error', 'Usuario no encontrado');
    }
  }

  // Función para mostrar alertas al usuario
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
