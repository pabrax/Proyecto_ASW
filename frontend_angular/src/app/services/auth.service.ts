import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5254/api/auth';
  constructor(private http: HttpClient) {}

  login(email: string, contrasena: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, contrasena });
    return this.http.post<any>(`${this.apiUrl}/login`, body, { headers });
  }

  logout() {
    localStorage.removeItem('token');
  }

   // Obtener el token almacenado
   getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserEmail(): string | null {
    return localStorage.getItem('email');
  }

  
}
