import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aplication-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aplication-navbar.component.html',
  styleUrl: './aplication-navbar.component.css',
  providers: [AuthService]
})
export class AplicationNavbarComponent {
  constructor(
    private authservice:AuthService,
    private router: Router 
  ){

  }
  onSubmit(){
    this.authservice.logout();
    this.router.navigate(["/"]);
  }
}
