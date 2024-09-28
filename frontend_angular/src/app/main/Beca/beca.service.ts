import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Beca {
  id: number;
  estudios: number;
  tipo: string;
  institucion: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BecaService {

  private apiUrl = "http://localhost:5254/api/beca"
  constructor(private http: HttpClient) { }


  // get all
  getBecas(): Observable<Beca[]> {
    return this.http.get<Beca[]>(this.apiUrl);
  }

  // get by id
  getBecaById(id: number): Observable<Beca> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Beca>(url);
  }

  // post
  createBeca(beca: Beca): Observable<Beca> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Beca>(this.apiUrl, beca, { headers });
  }

  // put by id
  updateBeca(id: number, beca: Beca): Observable<Beca> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Beca>(url, beca, {headers});
  }

  //delete
  deleteBeca(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
