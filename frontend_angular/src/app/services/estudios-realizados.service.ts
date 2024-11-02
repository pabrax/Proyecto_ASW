import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line

export interface EstudiosRealizados {
  id: number;
  titulo: string;
  universidad: string;
  fecha: string;
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
    const url = `${this.apiUrl}/id/${id}`;
    return this.http.get<EstudiosRealizados[]>(url).pipe(
      map(estudios => estudios[0])
    );
  }

  // post
  createEstudioRealizado(estudioRealizado: EstudiosRealizados): Observable<EstudiosRealizados> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<EstudiosRealizados>(this.apiUrl, estudioRealizado, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateEstudioRealizado(id: number, estudioRealizado: EstudiosRealizados): Observable<EstudiosRealizados> {
    const url = `${this.apiUrl}/id/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<EstudiosRealizados>(url, estudioRealizado, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteEstudioRealizado(id: number): Observable<void> {
    const url = `${this.apiUrl}/id/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
