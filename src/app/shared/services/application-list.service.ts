import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { MyApplication} from '../models/Application.model';

@Injectable({
  providedIn: 'root'
})

export class ApplicationListService {

  constructor(private httpClient: HttpClient) { } 

  ApplicationList:BehaviorSubject<MyApplication[]>=new BehaviorSubject<MyApplication[]>([]);

  getApplicationList(): Observable<MyApplication[]> {
    return this.httpClient.get<MyApplication[]>("http://localhost:3000/api/user/applicationList");
  }

  getApplicationListStatus(status: string): Observable<MyApplication[]> {
    return this.httpClient.get<MyApplication[]>("http://localhost:3000/api/user/applicationList/:status"+status);
  }

  addApplication(Application:MyApplication):void{
    this.httpClient.post<any>('http://localhost:3000/api/user/MyApplication',Application).subscribe({
      next: (data: any) => {
        this.addNewApplication(Application);
        console.log(data);
       },
       error: (data: any) => console.warn(data)

    })
  }
  private addNewApplication(Application:MyApplication){
    const application:MyApplication[]=this.ApplicationList.getValue();
    application.push(Application);
    this.ApplicationList.next(application);
  }

  updateApplicationStatus(Application:MyApplication): Promise<any> {
    return this.httpClient.patch<any>(
      'http://localhost:3000/api/user/applicationList/:id/'+ Application.userID,Application).toPromise();
  } 

  deleteApplication(id: string): void {
    this.httpClient.delete<any>(`http://localhost:3000/api/user/applicationList/:id/${id}`).subscribe({
     next: (data: any) => {
       console.log(data);
       this.deleteAppByID(id);
     },
     error: (data: any) => console.log(data)

   })
 }
 
 private deleteAppByID(id: string) {
   const apps: MyApplication[] = this.ApplicationList.getValue();
   apps.forEach((application, index) => {
     if(application._id=== id) {apps.splice(index, 1);}
   })
   this.ApplicationList.next(apps);
 }

}