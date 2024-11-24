import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private apiUrl = 'http://localhost:3000/api/rates';

  constructor(private http: HttpClient) { }

  obtenerTasasDeCambio(baseCurrency: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/${baseCurrency}`);
  }


}
