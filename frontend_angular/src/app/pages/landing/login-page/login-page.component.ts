import { Component } from '@angular/core';
import { Router } from '@angular/router';
// service
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  email = '';
  contrasena = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.contrasena).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['/app']);
      },
      (error) => {
        this.error = error.error;
      }
    );
  }
}
