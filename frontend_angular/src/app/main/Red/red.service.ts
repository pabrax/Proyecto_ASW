import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  private apiUrl = "http://127.0.0.1:8080/api/redes"
  constructor(private http: HttpClient) { }

  // get all
  getRedes(): Observable<Red[]> {
    return this.http.get<Red[]>(this.apiUrl);
  }

  // get by id
  getRedById(idr: number): Observable<Red> {
    const url = `${this.apiUrl}/${idr}`;
    return this.http.get<Red>(url);
  }

  // post
  createRed(red: Red): Observable<Red> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Red>(this.apiUrl, red, { headers });
  }

  // put by id
  updateRed(idr: number, red: Red): Observable<Red> {
    const url = `${this.apiUrl}/${idr}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<Red>(url, red, {headers});
  }

  //delete
  deleteRed(idr: number): Observable<void> {
    const url = `${this.apiUrl}/${idr}`;
    return this.http.delete<void>(url);
  }
}
