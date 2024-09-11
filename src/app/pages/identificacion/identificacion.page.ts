import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Agrega esta importación

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.page.html',
  styleUrls: ['./identificacion.page.scss'],
})
export class IdentificacionPage implements OnInit {

  constructor(private router: Router) { } // Inyecta el Router aquí

  ngOnInit() {
    // Si tienes lógica para cuando se carga el componente, déjala aquí
  }

  // Agrega la función de navegación
  goToLogin() {
    this.router.navigate(['/login']); // Navega a la vista de login
  }
}
