import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<any> {
    return this.http.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`);
  }
}
