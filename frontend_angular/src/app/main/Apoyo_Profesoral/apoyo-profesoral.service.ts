import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private apiUrl = "http://localhost:5254/api/apoyoProfesoral"
  constructor(private http: HttpClient) { }

  // get all

  getApoyoProfesorals(): Observable<ApoyoProfesoral[]> {
    return this.http.get<ApoyoProfesoral[]>(this.apiUrl);
  }

  // get by id

  getApoyoProfesoralById(id: number): Observable<ApoyoProfesoral> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ApoyoProfesoral>(url);
  }

  // post
  createApoyoProfesoral(apoyoProfesoral: ApoyoProfesoral): Observable<ApoyoProfesoral> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ApoyoProfesoral>(this.apiUrl, apoyoProfesoral, { headers });
  }

  // put by id
  updateApoyoProfesoral(id: number, apoyoProfesoral: ApoyoProfesoral): Observable<ApoyoProfesoral> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<ApoyoProfesoral>(url, apoyoProfesoral, {headers});
  }

  //delete

  deleteApoyoProfesoral(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
