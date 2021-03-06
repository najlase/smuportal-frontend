import { Component, OnInit } from '@angular/core';
import { MyApplication,ApplicationListService } from '@app/shared';
import { BehaviorSubject, from } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cc-applications',
  templateUrl: './cc-applications.component.html',
  styleUrls: ['./cc-applications.component.css']
})
export class CcApplicationsComponent implements OnInit {
  applicationList: BehaviorSubject<MyApplication[]>=new BehaviorSubject<MyApplication[]>([]);
  clicked:boolean[]=new Array(this.applicationList.getValue.length) ;
  constructor(private applicationListService:ApplicationListService,private router:Router) { }
  appRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this.applicationListService.getApplicationList().subscribe({
      next: (data:MyApplication[])=>this.applicationList.next(data),
      error: (data:any)=>console.log(data)
    })
  }

    deleteApplication(bid: string) {
      this.applicationListService.deleteApplication(bid);
      this.appRemoved.next(true);

    }


}
