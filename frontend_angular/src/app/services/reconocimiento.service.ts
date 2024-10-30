import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reconocimiento {
  id: number;
  tipo: string;
  fecha: Date;
  institucion: string;
  nombre: string;
  ambito: string;
  docente: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReconocimientoService {

  private apiUrl = "http://localhost:5254/api/reconocimiento"

  constructor(private http: HttpClient) { }


  // get all
  getReconocimientos(): Observable<Reconocimiento[]> {
    return this.http.get<Reconocimiento[]>(this.apiUrl);
  }

  // get by id
  getReconocimientoById(id: number): Observable<Reconocimiento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Reconocimiento>(url);
  }

  // post
  createReconocimiento(reconocimiento: Reconocimiento): Observable<Reconocimiento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Reconocimiento>(this.apiUrl, reconocimiento, { headers });
  }

  // put by id
  updateReconocimiento(id: number, reconocimiento: Reconocimiento): Observable<Reconocimiento> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Reconocimiento>(url, reconocimiento, {headers});
  }

  //delete
  deleteReconocimiento(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
