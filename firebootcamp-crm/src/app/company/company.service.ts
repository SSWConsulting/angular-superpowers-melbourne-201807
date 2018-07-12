import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  deleteCompany(id: number){
   return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`);
    // this.httpClient.delete<Company>(this.API_BASE + "/company" + id)
  }

  private errorHandler(error: any): Observable<any> {
    console.error('MAKE A BETTER ERROR HANDLER THAN THIS');
    return new Observable<any>();
  }

}
