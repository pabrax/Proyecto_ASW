import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface Experiencia {
  id: number;
  nombre_cargo: string;
  institucion: string;
  tipo: string;
  fecha_inicio: string;
  fecha_fin: string;
  docente: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/experiencia"
  constructor(private http: HttpClient) { }

  // get all
  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  // get by id
  getExperienciaById(id: number): Observable<Experiencia> {
    const url = `${this.apiUrl}/id/${id}`;
    return this.http.get<Experiencia[]>(url).pipe(
      map(results => results[0])
      );
  }

  // post
  createExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Experiencia>(this.apiUrl, experiencia, { headers, responseType: 'text' as 'json'  });
  }

  // put by id
  updateExperiencia(id: number, experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrl}/id/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Experiencia>(url, experiencia, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteExperiencia(id: number): Observable<void> {
    const url = `${this.apiUrl}/id/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'}); 
  }
}
