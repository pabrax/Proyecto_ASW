import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line

export interface EvaluacionDocente {
  id: number;
  calificacion: number;
  semestre: string;
  docente: number;
}

@Injectable({
  providedIn: 'root'
})
export class EvaluacionDocenteService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/evaluacion_docente"
  constructor(private http: HttpClient) { }

  // get all
  getEvaluacionDocentes(): Observable<EvaluacionDocente[]> {
    return this.http.get<EvaluacionDocente[]>(this.apiUrl);
  }

  // get by id
  getEvaluacionDocenteById(id: number): Observable<EvaluacionDocente> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.get<EvaluacionDocente[]>(url).pipe(
      map(evaluacionDocentes => evaluacionDocentes[0])
      );
  }

  // post
  createEvaluacionDocente(evaluacionDocente: EvaluacionDocente): Observable<EvaluacionDocente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<EvaluacionDocente>(this.apiUrl, evaluacionDocente, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateEvaluacionDocente(id: number, evaluacionDocente: EvaluacionDocente): Observable<EvaluacionDocente> {
    const url = `${this.apiUrl}/docente/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<EvaluacionDocente>(url, evaluacionDocente, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteEvaluacionDocente(id: number): Observable<void> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
  
}
