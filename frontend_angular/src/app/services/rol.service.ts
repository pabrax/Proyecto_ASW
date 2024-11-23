import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Rol {
  id: number;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = 'http://localhost:5254/api/roles'; // Cambia esto por la URL de tu API
  constructor(private http: HttpClient) {}

  // Obtener todos los roles
  getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.apiUrl);
  }

  // Obtener un rol por ID
  getRolById(id: number): Observable<Rol> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Rol[]>(url).pipe(
      map(roles => roles[0]) // Ajusta si la API devuelve directamente un objeto en lugar de un array
    );
  }

  // Crear un rol
  createRol(rol: Rol): Observable<Rol> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Rol>(this.apiUrl, rol, { headers });
  }

  // Actualizar un rol por ID
  updateRol(id: number, rol: Rol): Observable<Rol> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Rol>(url, rol, { headers });
  }

  // Eliminar un rol por ID
  deleteRol(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
