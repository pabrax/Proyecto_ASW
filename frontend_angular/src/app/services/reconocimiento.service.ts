import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line

export interface Reconocimiento {
  id: number;
  tipo: string;
  fecha: string;
  institucion: string;
  nombre: string;
  ambito: string;
  docente: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReconocimientoService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/reconocimiento"

  constructor(private http: HttpClient) { }


  // get all
  getReconocimientos(): Observable<Reconocimiento[]> {
    return this.http.get<Reconocimiento[]>(this.apiUrl);
  }

  // get by id
  getReconocimientoById(id: number): Observable<Reconocimiento> {
    const url = `${this.apiUrl}/id/${id}`;
    return this.http.get<Reconocimiento[]>(url).pipe(
      map(results => results[0])
      );
  }

  // post
  createReconocimiento(reconocimiento: Reconocimiento): Observable<Reconocimiento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Reconocimiento>(this.apiUrl, reconocimiento, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateReconocimiento(id: number, reconocimiento: Reconocimiento): Observable<Reconocimiento> {
    const url = `${this.apiUrl}/id/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Reconocimiento>(url, reconocimiento, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteReconocimiento(id: number): Observable<void> {
    const url = `${this.apiUrl}/id/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
