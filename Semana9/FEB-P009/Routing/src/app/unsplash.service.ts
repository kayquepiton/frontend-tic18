import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private apiKey = 'xGzCm5_HGXkt1e5kO1Cpww-StHTlsba3vPjQgl0nFy8'; // Substitua pela sua chave de API do Unsplash
  private apiUrl = 'https://api.unsplash.com/photos';

  constructor(private http: HttpClient) {}

  buscarImagens(): Observable<any[]> {
    const url = `${this.apiUrl}?client_id=${this.apiKey}&per_page=3`; // Limita a 3 imagens

    return this.http.get<any[]>(url);
  }
}
