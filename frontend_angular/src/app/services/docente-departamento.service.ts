import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DocenteDepartamento {
  docente_id: number;
  departamento_id: number;
  dedicacion: string;
  modalidad: string;
  fecha_ingreso: Date;
  fecha_salida: Date;
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
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<DocenteDepartamento>(url);
  }

  // post
  createDocenteDepartamento(beca: DocenteDepartamento): Observable<DocenteDepartamento> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<DocenteDepartamento>(this.apiUrl, beca, { headers });
  }

  // put by id
  updateDocenteDepartamento(id: number, beca: DocenteDepartamento): Observable<DocenteDepartamento> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({'Content-Type': 'application/json'})
    return this.http.put<DocenteDepartamento>(url, beca, {headers});
  }

  //delete
  deleteDocenteDepartamento(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
