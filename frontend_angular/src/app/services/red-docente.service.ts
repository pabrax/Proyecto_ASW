import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RedDocente {
  docente_id: number;
  departamento_id: number;
  dedicacion: string;
  modalidad: string;
  fecha_ingreso: Date;
  fecha_salida: Date;
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
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<RedDocente>(url);
  }

  // post
  createRedDocente(reddocente: RedDocente): Observable<RedDocente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<RedDocente>(this.apiUrl, reddocente, { headers });
  }

  // put by id
  updateRedDocente(id: number, beca: RedDocente): Observable<RedDocente> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<RedDocente>(url, beca, {headers});
  }

  //delete
  deleteRedDocente(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
