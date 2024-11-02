import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface Aliado {
  nit: number;
  razon_social: string;
  nombre_contacto: string;
  correo: string;
  telefono: string;
  ciudad: string;
}

@Injectable({
  providedIn: 'root'
})

export class AliadoService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/aliado"
  constructor(private http: HttpClient) { }

  // get all
  getAliados(): Observable<Aliado[]> {
    return this.http.get<Aliado[]>(this.apiUrl);
  }

  // get by nit
  getAliadoByNit(nit: number): Observable<Aliado> {
    const url = `${this.apiUrl}/nit/${nit}`;
    return this.http.get<Aliado[]>(url).pipe(
      map(aliados => aliados[0])
      );
  }

  // post
  createAliado(aliado: Aliado): Observable<Aliado> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Aliado>(this.apiUrl, aliado, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateAliado(id: number, aliado: Aliado): Observable<Aliado> {
    const url = `${this.apiUrl}/nit/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Aliado>(url, aliado, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteAliado(id: number): Observable<void> {
    const url = `${this.apiUrl}/nit/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
