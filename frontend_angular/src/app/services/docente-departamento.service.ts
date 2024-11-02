import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Add this line


export interface DocenteDepartamento {
  docente_id: number;
  departamento_id: number;
  dedicacion: string;
  modalidad: string;
  fecha_ingreso: string;
  fecha_salida: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocenteDepartamentoService {

  private apiUrl = "http://localhost:5254/api/ProyectoBackend/docente_departamento"
  constructor(private http: HttpClient) { }


  // get all
  getDocenteDepartamentos(): Observable<DocenteDepartamento[]> {
    return this.http.get<DocenteDepartamento[]>(this.apiUrl);
  }

  // get by id
  getDocenteDepartamentoById(id: number): Observable<DocenteDepartamento> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.get<DocenteDepartamento[]>(url).pipe(
      map(results => results[0])
      );
  }

  // post
  createDocenteDepartamento(beca: DocenteDepartamento): Observable<DocenteDepartamento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<DocenteDepartamento>(this.apiUrl, beca, { headers, responseType: 'text' as 'json' });
  }

  // put by id
  updateDocenteDepartamento(id: number, beca: DocenteDepartamento): Observable<DocenteDepartamento> {
    const url = `${this.apiUrl}/docente/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<DocenteDepartamento>(url, beca, {headers, responseType: 'text' as 'json'});
  }

  //delete
  deleteDocenteDepartamento(id: number): Observable<void> {
    const url = `${this.apiUrl}/docente/${id}`;
    return this.http.delete<void>(url, {responseType: 'text' as 'json'});
  }
}
