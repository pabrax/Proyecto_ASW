import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aplication-header',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './aplication-header.component.html',
  styleUrl: './aplication-header.component.css',
  providers:[AuthService]
})
export class AplicationHeaderComponent {
  constructor(
    private authservice:AuthService,
    private router: Router 
  ){

  }
  onSubmit(){
    console.log('Cerrando sesion')
    this.authservice.logout();
    this.router.navigate(["/"]);
  }
}
