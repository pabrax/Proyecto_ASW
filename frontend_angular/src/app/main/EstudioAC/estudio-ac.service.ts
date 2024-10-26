import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EstudioAc {
  estudio: number;
  area_conocimiento_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstudioAcService {

  private apiUrl = "http://localhost:5254/api/estudioac"
  constructor (private http: HttpClient) { }

  // get all
  getEstudios(): Observable<EstudioAc[]> {
    return this.http.get<EstudioAc[]>(this.apiUrl);
  }

  // get by id
  getEstudioById(id: number): Observable<EstudioAc> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<EstudioAc>(url);
  }

  // post
  createEstudio(estudio: EstudioAc): Observable<EstudioAc> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<EstudioAc>(this.apiUrl, estudio, { headers });
  }

  // put by id
  updateEstudio(id: number, estudio: EstudioAc): Observable<EstudioAc> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<EstudioAc>(url, estudio, { headers });
  }

  // delete
  deleteEstudio(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
