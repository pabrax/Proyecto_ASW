import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Alianza {
  aliado: number;
  departamento: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  docente: number;
}

@Injectable({
  providedIn: 'root'
})

export class AlianzaService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/alianza"
  constructor(private http: HttpClient) { }

  // get all
  getAlianza(): Observable<Alianza[]> {
    return this.http.get<Alianza[]>(this.apiUrl);
  }

  // get by id
  getAlianzaById(id: number): Observable<Alianza> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Alianza>(url);
  }

  // post
  createAlianza(Alianza: Alianza): Observable<Alianza> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Alianza>(this.apiUrl, Alianza, { headers });
  }

  // put by id
  updateAlianza(id: number, alianza: Alianza): Observable<Alianza> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Alianza>(url, alianza, {headers});
  }

  //delete
  deleteAlianza(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
