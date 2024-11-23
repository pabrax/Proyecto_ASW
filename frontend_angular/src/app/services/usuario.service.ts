import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  email: string;
  contrasena: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:5254/api/usuarios'; // Cambia esta URL según tu API
  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Obtener un usuario por correo electrónico
  getUsuarioByEmail(email: string): Observable<Usuario> {
    const url = `${this.apiUrl}/${encodeURIComponent(email)}`;
    return this.http.get<Usuario>(url);
  }

  // Crear un usuario
  createUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Usuario>(this.apiUrl, usuario, { headers });
  }

  // Actualizar un usuario por correo electrónico
  updateUsuario(email: string, usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${encodeURIComponent(email)}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Usuario>(url, usuario, { headers });
  }

  // Eliminar un usuario por correo electrónico
  deleteUsuario(email: string): Observable<void> {
    const url = `${this.apiUrl}/${encodeURIComponent(email)}`;
    return this.http.delete<void>(url);
  }
}
