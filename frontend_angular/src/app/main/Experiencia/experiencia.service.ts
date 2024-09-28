import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experiencia {
  id: number;
  nombre_cargo: string;
  institucion: string;
  fecha_inicio: Date;
  fecha_fin: Date;
  docente: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiUrl = "http://localhost:5254/api/experiencia"
  constructor(private http: HttpClient) { }

  // get all
  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  // get by id
  getExperienciaById(id: number): Observable<Experiencia> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Experiencia>(url);
  }

  // post
  createExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Experiencia>(this.apiUrl, experiencia, { headers });
  }

  // put by id
  updateExperiencia(id: number, experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Experiencia>(url, experiencia, {headers});
  }

  //delete
  deleteExperiencia(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
