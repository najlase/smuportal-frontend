import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Internship } from '../models/internship.model';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {

  constructor(private httpClient: HttpClient) {}

  get(): Promise<Internship[]> {
    return this.httpClient.get<Internship[]>(
      'http://localhost:3000/api/user/internships').toPromise();
  }

  getAll(): Promise<Internship[]> {
    return this.httpClient.get<Internship[]>(
      'http://localhost:3000/api/user/internships/all').toPromise();
  }

  filter(filter: any): Promise<Internship[]> {
    return this.httpClient.post<Internship[]>(
      'http://localhost:3000/api/user/internships/filter', filter).toPromise();
  }

  filterAll(filter: any): Promise<Internship[]> {
    return this.httpClient.post<Internship[]>(
      'http://localhost:3000/api/user/internships/filterAll', filter).toPromise();
  }

  archive(id: string): Promise<Internship> {
    return this.httpClient.patch<Internship>(
      'http://localhost:3000/api/user/internships/' + id + '/archive', null).toPromise();
  }

  restore(id: string): Promise<Internship> {
    return this.httpClient.patch<Internship>(
      'http://localhost:3000/api/user/internships/' + id + '/restore', null).toPromise();
  }

  update(internship: Internship): Promise<any> {
    return this.httpClient.patch<any>(
      'http://localhost:3000/api/user/internships/' + internship._id, internship).toPromise();
  }

  create(internship: Internship): Promise<any> {
    return this.httpClient.post<Internship>(
      'http://localhost:3000/api/user/internships/', internship).toPromise();
  }

  star(internshipId: string): Promise<any> {
    return this.httpClient.post<any>(
      'http://localhost:3000/api/user/internships/' + internshipId + '/star', null).toPromise();
  }
  getStarred(): Promise<string[]> {
    return this.httpClient.get<string[]>(
      'http://localhost:3000/api/user/internships/starred').toPromise();
  }
}
