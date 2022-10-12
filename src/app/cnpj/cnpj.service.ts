import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  constructor(private http: HttpClient) { }

  consultaCnpj(cnpj: string) {
    if (cnpj !== '') {
      const validacnpj = /^[0-9]{8}$/;
      if (validacnpj.test(cnpj)) {
        return this.http.get(`https://brasilapi.com.br/api/cnpj/v1/{cnpj}`);
      }
    }
    return of({});
  }
}