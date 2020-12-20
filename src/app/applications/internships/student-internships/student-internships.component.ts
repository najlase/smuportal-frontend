import { Component, OnInit } from '@angular/core';
  import {faCheck, faChevronDown, faChevronUp, faSearch, faStar} from "@fortawesome/free-solid-svg-icons";
  import {InternshipService} from "@app/shared/services/internship.service";
import {InternshipApplicationService} from "@app/shared/services/internship-application.service";
import {MyApplication} from "@app/shared";

@Component({
  selector: 'app-student-internships',
  templateUrl: './student-internships.component.html',
  styleUrls: ['./student-internships.component.css']
})
export class StudentInternshipsComponent implements OnInit {

  faStar = faStar;
  faSearch = faSearch;
  faCheck = faCheck;
  faDetails = faChevronDown;
  faDetailsOff = faChevronUp;

  internships = []
  isDetailedView: boolean[] = [];
  starredInternships: string[] =[];
  internshipFilters = {Title: '', Domain: '', Location: '', Deadline: null, Duration: '', StartingDate: null}

  myApplications: MyApplication[] = []
  constructor(private internshipService: InternshipService, private applicationService: InternshipApplicationService) { }

  ngOnInit() {
    this.applicationService.getUserApplications("5fdf84440e18dc2b67e1459d").then(res => {
      this.myApplications = res;
    });

    this.internshipService.get().then(internshipResults => {
      this.internships = internshipResults;
      for(let i = 0; i < this.internships.length; i++)
        this.isDetailedView.push(false);
    });

    this.internshipService.getStarred().then(res => {
      this.starredInternships = res;
    })
  }

  filter(){
    this.internshipService.filter(this.internshipFilters).then(res => {
      this.internships = res;
    });
  }

  apply(index: number) {
    this.applicationService.apply(this.internships[index]._id).then(res => {
      this.myApplications.push(res);
    });
  }

  alreadyApplied(index: number): boolean {
    const x = this.myApplications.filter(app => app.InternshipID === this.internships[index]._id);
    return x.length > 0;
  }

  toggleDetails(index: number)
  {
    this.isDetailedView[index] = !this.isDetailedView[index];
  }

  star(index: number)
  {
    this.internshipService.star(this.internships[index]._id).then(res => {
      const i = this.starredInternships.findIndex(el => el === this.internships[index]._id);
      console.log(i);
      if(i === -1){
        this.starredInternships.push(this.internships[index]._id);
      }
      else{
        this.starredInternships.splice(i, 1);
      }
    })
  }

  isStarred(index: number){
    return this.starredInternships && this.starredInternships.includes(this.internships[index]._id);
  }
}
