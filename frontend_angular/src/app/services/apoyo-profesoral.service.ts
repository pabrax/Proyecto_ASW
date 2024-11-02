import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface ApoyoProfesoral {
  estudios: number;
  con_apoyo: boolean;
  institucion: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApoyoProfesoralService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/apoyo_profesoral"
  constructor(private http: HttpClient) { }

  // get all

  getApoyoProfesorals(): Observable<ApoyoProfesoral[]> {
    return this.http.get<ApoyoProfesoral[]>(this.apiUrl);
  }

  // get by id

  getApoyoProfesoralById(id: number): Observable<ApoyoProfesoral> {
    const url = `${this.apiUrl}/estudios/${id}`;
    return this.http.get<ApoyoProfesoral[]>(url).pipe(
      map(apoyoProfesorals => apoyoProfesorals[0])
      );
  }

  // post
  createApoyoProfesoral(apoyoProfesoral: ApoyoProfesoral): Observable<ApoyoProfesoral> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ApoyoProfesoral>(this.apiUrl, apoyoProfesoral, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateApoyoProfesoral(id: number, apoyoProfesoral: ApoyoProfesoral): Observable<ApoyoProfesoral> {
    const url = `${this.apiUrl}/estudios/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<ApoyoProfesoral>(url, apoyoProfesoral, {headers, responseType: 'text' as 'json'});
  }

  //delete

  deleteApoyoProfesoral(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }

}
