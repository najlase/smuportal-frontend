import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {}

  get(): Promise<Company[]> {
    return this.httpClient.get<Company[]>(
      'http://localhost:3000/api/user/companies').toPromise();
  }
}
