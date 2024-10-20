import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InteresesFuturos {
  docente_id: number;
  termino_clave: string;
}
@Injectable({
  providedIn: 'root'
})
export class InteresesFuturosService {

  private apiUrl = "http://localhost:5254/api/interesesFuturos"
  constructor(private http: HttpClient) { }


  // get all
  getInteresesFuturos(): Observable<InteresesFuturos[]> {
    return this.http.get<InteresesFuturos[]>(this.apiUrl);
  }

  // get by id
  getInteresesFuturosById(id: number): Observable<InteresesFuturos> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<InteresesFuturos>(url);
  }

  // post
  createInteresesFuturos(interesesFuturos: InteresesFuturos): Observable<InteresesFuturos> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<InteresesFuturos>(this.apiUrl, interesesFuturos, { headers });
  }

  // put by id
  updateInteresesFuturos(id: number, interesesFuturos: InteresesFuturos): Observable<InteresesFuturos> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<InteresesFuturos>(url, interesesFuturos, {headers});
  }

  //delete
  deleteInteresesFuturos(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
