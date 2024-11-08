import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface Beca {
  estudios: number;
  tipo: string;
  institucion: string;
  fecha_inicio: string;
  fecha_fin: string;
}

@Injectable({
  providedIn: 'root'
})
export class BecaService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/beca"
  constructor(private http: HttpClient) { }


  // get all
  getBecas(): Observable<Beca[]> {
    return this.http.get<Beca[]>(this.apiUrl);
  }

  // get by id
  getBecaById(id: number): Observable<Beca> {
    const url = `${this.apiUrl}/estudios/${id}`;
    return this.http.get<Beca[]>(url).pipe(
      map(results => results[0])
      );
  }

  // post
  createBeca(beca: Beca): Observable<Beca> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Beca>(this.apiUrl, beca, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateBeca(id: number, beca: Beca): Observable<Beca> {
    const url = `${this.apiUrl}/estudios/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Beca>(url, beca, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteBeca(id: number): Observable<void> {
    const url = `${this.apiUrl}/estudios/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
