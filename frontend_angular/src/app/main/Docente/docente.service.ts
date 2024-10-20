import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Docente {
  cedula: number;
  nombres: string;
  apellidos: string;
  genero: string;
  cargo: string;
  fecha_nacimiento: Date;
  correo: string;
  telefono: string;
  url_cvlac: string;
  fecha_actualizacion: Date;
  escalafon: string;
  perfil: string;
  cat_minciencia: string;
  conv_minciencia: string;
  nacionalidad: string;
  linea_investigacion_principal: number;
}


@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private apiUrl = "http://localhost:5254/api/docente"
  constructor(private http: HttpClient) { }

  //get all
  getDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.apiUrl);
  }

  //get by id
  getDocenteById(id: number): Observable<Docente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Docente>(url);
  }

  //post
  createDocente(docente: Docente): Observable<Docente> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Docente>(this.apiUrl, docente, { headers });
  }

  //put by id
  updateDocente(id: number, docente: Docente): Observable<Docente> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.put<Docente>(url, docente, { headers });
  }

  //delete
  deleteDocente(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
