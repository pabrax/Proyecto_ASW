import { Component } from '@angular/core';
import { Router } from '@angular/router';

// service
import { AuthService } from '../../../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers: [AuthService],
})
export class LoginPageComponent {
  email = '';
  contrasena = '';
  error = '';

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthService,
    private router: Router,
    private FromBuilder: FormBuilder
  ) {
    this.loginForm = this.FromBuilder.group({
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  login() {
    this.authService.login(this.email, this.contrasena).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        if (data && data.token) {
          console.log('Login exitoso', data.token);
        } else {
          console.error('Token no encontrado en la respuesta', data);
        }
        this.router.navigate(['/app']);
      },
      (error) => {
        this.error = error.error;
      }
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.email = this.loginForm.value.email;
      this.contrasena = this.loginForm.value.contrasena;
      this.login();
    }
  }
}
