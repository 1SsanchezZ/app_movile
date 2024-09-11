import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  loginUsuario: string ="";
  loginContrasena: string ="";

  constructor(private router: Router) { }

  ngOnInit() {
      const navigate = this.router.getCurrentNavigation();
      if (navigate?.extras.state){
        const { correo, contrasena } = navigate.extras.state as any;
        this.loginUsuario = correo;
        this.loginContrasena = contrasena;
    }

    console.log(this.loginUsuario);
    console.log(this.loginContrasena);
  }

}
