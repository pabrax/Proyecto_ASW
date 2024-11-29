import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RolController } from '../../classes/rolController';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-aplication-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './aplication-navbar.component.html',
  styleUrl: './aplication-navbar.component.css',
  providers: [AuthService, RolController]
})
export class AplicationNavbarComponent {
  isAdmin: boolean = false;

  constructor(
    private rolController: RolController,
    private authService: AuthService,
    // private router: Router 
  ){
    this.checkAdmin();
  }
  async checkAdmin() {
    await this.rolController.verifyAdmin(localStorage.getItem('email') || '');
    this.isAdmin = this.rolController.isAdmin();
    console.log('isAdmin', this.isAdmin);
  }

}
