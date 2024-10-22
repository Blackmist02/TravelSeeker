import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser: string = '';
  loginPassword: string = '';
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  login() {

    this.usuarioService.login(this.loginUser, this.loginPassword).subscribe(data => {
      console.log('Usuario logueado', data);
      //Funcion para almacenar el usuario en el localStorage

      localStorage.setItem('usuario', JSON.stringify(data));
      // redireccionar a pagina tabs/home
      // You can use the router to navigate to the tabs/home page
      this.router.navigate(['/home']);

    }, error => {
      console.error('Error al loguear usuario', error);
    });  
  }

  recuperarContrasenia() {
    this.router.navigate(['/recuperar-contrasenia']);
}
}