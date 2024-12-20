import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface Red {
  idr: number;
  nombre: string;
  url: string;
  pais: string;

}

@Injectable({
  providedIn: 'root'
})
export class RedService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/red"
  constructor(private http: HttpClient) { }

  // get all
  getRedes(): Observable<Red[]> {
    return this.http.get<Red[]>(this.apiUrl);
  }

  // get by id
  getRedById(idr: number): Observable<Red> {
    const url = `${this.apiUrl}/idr/${idr}`;
    return this.http.get<Red[]>(url).pipe(
      map(redes => redes[0])
    );
  }

  // post
  createRed(red: Red): Observable<Red> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Red>(this.apiUrl, red, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateRed(idr: number, red: Red): Observable<Red> {
    const url = `${this.apiUrl}/idr/${idr}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Red>(url, red, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteRed(idr: number): Observable<void> {
    const url = `${this.apiUrl}/idr/${idr}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
