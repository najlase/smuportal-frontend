import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyApplication} from "@app/shared";

@Injectable({
  providedIn: 'root'
})
export class InternshipApplicationService {

  constructor(private httpClient: HttpClient) {}

  getUserApplications(userId): Promise<MyApplication[]> {
    return this.httpClient.get<MyApplication[]>(
      'http://localhost:3000/api/user/applicationList/user/' + userId).toPromise();
  }


  apply(internshipId: string): Promise<any> {
    return this.httpClient.post<any>(
      'http://localhost:3000/api/user/myApplication', {InternshipID: internshipId}).toPromise();
  }
}
