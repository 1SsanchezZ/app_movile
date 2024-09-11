import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string ="";
  loginContrasena: string ="";


   constructor(private router: Router) {}
  ngOnInit() {
    console.log("hola mundo")
  }

  validarcredenciales(){
    console.log(this.loginUsuario);
    console.log(this.loginContrasena);
    this.router.navigate(['/inicio'],{
      state: {
        correo: this.loginUsuario,
        contrasena: this.loginContrasena
      }
    });
  }

}