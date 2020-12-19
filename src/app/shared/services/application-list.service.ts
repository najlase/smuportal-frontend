import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { MyApplication} from '../models/Application.model';

@Injectable({
  providedIn: 'root'
})

export class ApplicationListService {
  ApplicationList:BehaviorSubject<MyApplication[]>=new BehaviorSubject<MyApplication[]>([]);

  constructor(private httpClient: HttpClient) { }
  addApplication(userID: number, internshipID: number, files:string):void{
    this.httpClient.post<any>('http://localhost:3000/api/user/MyApplication',userID).subscribe()
  }

}
