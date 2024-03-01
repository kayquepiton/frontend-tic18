// shared.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private categoriaSelecionadaSubject = new BehaviorSubject<string | null>(null);
  categoriaSelecionada$: Observable<string | null> = this.categoriaSelecionadaSubject.asObservable();

  setCategoriaSelecionada(categoria: string | null) {
    this.categoriaSelecionadaSubject.next(categoria);
  }
}
