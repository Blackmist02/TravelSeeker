import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loginUser: string = "";
  loginPassword: string = "";
  time: string;
  private intervalId: any;
  constructor(private router: Router) { 
    this.time = this.getTime();
  }

  ngOnInit() {
    // Your code here
    // Se actualiza cada segundo
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state){
      const {usuario,clave} = navigation?.extras.state;
      this.loginUser = usuario;
      this.loginPassword = clave;
    }
    this.updateTime();

    this.intervalId = setInterval(() => {
      this.time = this.getTime();
    }, 1000);

    console.log(this.loginUser);
    console.log(this.loginPassword);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  //funcion que devuelve la hora actual y que este se actualice cada segundo
  
  getTime() {
    return new Date().toLocaleTimeString();
  }

  updateTime() {
    this.time = this.getTime();
  }
}
