import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = 'bf818b953a844ddb9fe0df6528f6237e';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  buscarDadosAPI(categoria?: string): Observable<any> {
    // Verifica se a categoria foi fornecida e adiciona à URL se existir
    const url = categoria ? `${this.apiUrl}?category=${categoria}&apiKey=${this.apiKey}` : `${this.apiUrl}?apiKey=${this.apiKey}`;
    
    return this.http.get(url);
  }
}
