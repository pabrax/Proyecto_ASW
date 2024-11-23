import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RolUsuario {
  correo_usuario: string;
  id_rol: number;
}

@Injectable({
  providedIn: 'root'
})
export class RolUsuarioService {

  private apiUrl = 'http://localhost:5254/api/rol_usuario'; // Cambia esta URL según tu API
  constructor(private http: HttpClient) {}

  // Obtener todas las relaciones rol-usuario
  getRolUsuarios(): Observable<RolUsuario[]> {
    return this.http.get<RolUsuario[]>(this.apiUrl);
  }

  // Obtener los roles de un usuario por su correo electrónico
  getRolesByUsuario(correoUsuario: string): Observable<RolUsuario[]> {
    const url = `${this.apiUrl}/usuario/${encodeURIComponent(correoUsuario)}`;
    return this.http.get<RolUsuario[]>(url);
  }

  // Obtener los usuarios asignados a un rol específico por ID de rol
  getUsuariosByRol(idRol: number): Observable<RolUsuario[]> {
    const url = `${this.apiUrl}/rol/${idRol}`;
    return this.http.get<RolUsuario[]>(url);
  }

  // Asignar un rol a un usuario
  assignRolToUsuario(rolUsuario: RolUsuario): Observable<RolUsuario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RolUsuario>(this.apiUrl, rolUsuario, { headers });
  }

  // Actualizar el rol de un usuario específico
  updateRolUsuario(correoUsuario: string, rolUsuario: RolUsuario): Observable<RolUsuario> {
    const url = `${this.apiUrl}/usuario/${encodeURIComponent(correoUsuario)}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<RolUsuario>(url, rolUsuario, { headers });
  }

  // Eliminar un rol asignado a un usuario
  deleteRolUsuario(correoUsuario: string, idRol: number): Observable<void> {
    const url = `${this.apiUrl}/usuario/${encodeURIComponent(correoUsuario)}/rol/${idRol}`;
    return this.http.delete<void>(url);
  }
}
