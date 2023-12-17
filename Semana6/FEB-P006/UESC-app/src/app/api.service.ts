// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl =
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bf818b953a844ddb9fe0df6528f6237e';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any> {
    const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(this.apiUrl);
    return this.http.get(proxyUrl);
  }
}
