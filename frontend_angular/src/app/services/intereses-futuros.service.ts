import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line

export interface InteresesFuturos {
  docente: number;
  termino_clave: string;
}
@Injectable({
  providedIn: 'root'
})
export class InteresesFuturosService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/intereses_futuros"
  constructor(private http: HttpClient) { }


  // get all
  getInteresesFuturos(): Observable<InteresesFuturos[]> {
    return this.http.get<InteresesFuturos[]>(this.apiUrl);
  }

  // get by id
  getInteresesFuturosById(id: number): Observable<InteresesFuturos> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.get<InteresesFuturos[]>(url).pipe(
      map(interesesFuturos => interesesFuturos[0])
      );
  }

  // post
  createInteresesFuturos(interesesFuturos: InteresesFuturos): Observable<InteresesFuturos> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<InteresesFuturos>(this.apiUrl, interesesFuturos, { headers, responseType: 'text' as 'json'  });
  }

  // put by id
  updateInteresesFuturos(id: number, interesesFuturos: InteresesFuturos): Observable<InteresesFuturos> {
    const url = `${this.apiUrl}/docente/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<InteresesFuturos>(url, interesesFuturos, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteInteresesFuturos(id: number): Observable<void> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
