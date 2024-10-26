import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private apiUrl = "http://localhost:5254/api/aliado"
  constructor(private http: HttpClient) { }

  // get all
  getAliados(): Observable<Aliado[]> {
    return this.http.get<Aliado[]>(this.apiUrl);
  }

  // get by nit
  getAliadoByNit(nit: number): Observable<Aliado> {
    const url = `${this.apiUrl}/${nit}`;
    return this.http.get<Aliado>(url);
  }

  // post
  createAliado(aliado: Aliado): Observable<Aliado> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Aliado>(this.apiUrl, aliado, { headers });
  }

  // put by id
  updateAliado(id: number, aliado: Aliado): Observable<Aliado> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Aliado>(url, aliado, {headers});
  }

  //delete
  deleteAliado(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
