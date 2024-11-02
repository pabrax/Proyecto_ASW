import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line

export interface RedDocente {
  red: number;
  docente: number;
  fecha_inicio: string;
  fecha_fin: string;
  act_destacadas: string;
}

@Injectable({
  providedIn: 'root'
})
export class RedDocenteService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/red_docente"
  constructor(private http: HttpClient) { }


  // get all
  getRedDocentes(): Observable<RedDocente[]> {
    return this.http.get<RedDocente[]>(this.apiUrl);
  }

  // get by id
  getRedDocenteById(id: number): Observable<RedDocente> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.get<RedDocente[]>(url).pipe(
      map(results => results[0])
      );
  }

  // post
  createRedDocente(reddocente: RedDocente): Observable<RedDocente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RedDocente>(this.apiUrl, reddocente, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateRedDocente(id: number, beca: RedDocente): Observable<RedDocente> {
    const url = `${this.apiUrl}/docente/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<RedDocente>(url, beca, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteRedDocente(id: number): Observable<void> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
