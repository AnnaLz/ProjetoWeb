import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {

  constructor(private http: HttpClient) { }

  createAssociado(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/associado`, data);
  }
  
  getAssociado(): Observable<any>{
    return this.http.get(`${baseUrl}/associado`);
  }

  getAssociadoOne(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/associado/${id}`);
  }

  updateAssociado(id: number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/associado/${id}`, data);
  }

  deleteAssociado(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/associado/${id}`);
  }

  createPublicacao(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/publicacao`, data);
  }

  getPublicacao(): Observable<any>{
    return this.http.get(`${baseUrl}/publicacao`);
  }

  getPublicacaoOne(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/publicacao/${id}`);
  }

  updatePublicacao(id: number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/publicacao/${id}`, data);
  }

  deletePublicacao(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/publicacao/${id}`);
  }

  createExemplar(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/exemplar`, data);
  }

  getExemplar(): Observable<any>{
    return this.http.get(`${baseUrl}/exemplar`);
  }

  getExemplarOne(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/exemplar/${id}`);
  }

  updateExemplar(id: number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/exemplar/${id}`, data);
  }

  deleteExemplar(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/exemplar/${id}`);
  }

  createFuncionario(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/funcionario`, data);
  }

  getFuncionario(): Observable<any>{
    return this.http.get(`${baseUrl}/funcionario`);
  }

  getFuncionarioOne(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/funcionario/${id}`);
  }

  updateFuncionario(id: number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/funcionario/${id}`, data);
  }

  deleteFuncionario(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/funcionario/${id}`);
  }

  createEmprestimo(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/emprestimo`, data);
  }

  getEmprestimo(): Observable<any>{
    return this.http.get(`${baseUrl}/emprestimo`);
  }
  
  getEmprestimoOne(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/emprestimo/${id}`);
  }

  updateEmprestimo(id: number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/emprestimo/${id}`, data);
  }

  deleteEmprestimo(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/emprestimo/${id}`);
  }

  createReserva(data: any): Observable<any>{
    return this.http.post(`${baseUrl}/reserva`, data);
  }

  getReserva(): Observable<any>{
    return this.http.get(`${baseUrl}/reserva`);
  }

  getReservaOne(id: number): Observable<any>{ // getReservaOne(id: number): Observable<any>{  getReservaOne(id: number): Observable<any>{
    return this.http.get(`${baseUrl}/reserva/${id}`);
  }

  updateReserva(id: number, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/reserva/${id}`, data);
  }
  
  deleteReserva(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/reserva/${id}`);
  }

}
