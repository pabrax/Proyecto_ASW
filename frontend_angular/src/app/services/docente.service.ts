import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface Docente {
  cedula: number;
  nombres: string;
  apellidos: string;
  genero: string;
  cargo: string;
  fecha_nacimiento: string;
  correo: string;
  telefono: string;
  url_cvlac: string;
  fecha_actualizacion: string;
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

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/docente"
  constructor(private http: HttpClient) { }

  //get all
  getDocentes(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.apiUrl);
  }

  //get by id
  getDocenteById(id: number): Observable<Docente> {
    const url = `${this.apiUrl}/cedula/${id}`;
    return this.http.get<Docente[]>(url).pipe(
      map(docentes => docentes[0])
    );
  }

  //post
  createDocente(docente: Docente): Observable<Docente> {
    console.log(docente);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Docente>(this.apiUrl, docente, { headers, responseType: 'text' as 'json' });
  }

  //put by id
  updateDocente(id: number, docente: Docente): Observable<Docente> {
    const url = `${this.apiUrl}/cedula/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.put<Docente>(url, docente, { headers, responseType: 'text' as 'json' });
  }

  //delete
  deleteDocente(id: number): Observable<void> {
    const url = `${this.apiUrl}/cedula/${id}`;
    return this.http.delete<void>(url, { responseType: 'text' as 'json' });
  }

}
