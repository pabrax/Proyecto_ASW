import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EstudiosRealizados {
  id: number;
  titulo: string;
  universidad: string;
  fecha: Date;
  tipo: string;
  ciudad: string;
  docente: number;
  ins_acreditada: boolean;
  metodologia: string;
  perfil_egresado: string;
  pais: string;
}


@Injectable({
  providedIn: 'root'
})

export class EstudiosRealizadosService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/estudios_realizados"
  constructor(private http: HttpClient) { }

  // get all
  getEstudiosRealizados(): Observable<EstudiosRealizados[]> {
    return this.http.get<EstudiosRealizados[]>(this.apiUrl);
  }

  // get by id
  getEstudioRealizadoById(id: number): Observable<EstudiosRealizados> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EstudiosRealizados>(url);
  }

  // post
  createEstudioRealizado(estudioRealizado: EstudiosRealizados): Observable<EstudiosRealizados> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<EstudiosRealizados>(this.apiUrl, estudioRealizado, { headers });
  }

  // put by id
  updateEstudioRealizado(id: number, estudioRealizado: EstudiosRealizados): Observable<EstudiosRealizados> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<EstudiosRealizados>(url, estudioRealizado, {headers});
  }

  //delete
  deleteEstudioRealizado(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
