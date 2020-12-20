import { Component, OnInit } from '@angular/core';
import {faSearch, faStar} from "@fortawesome/free-solid-svg-icons";
import {InternshipService} from "@app/shared/services/internship.service";

@Component({
  selector: 'app-student-internships',
  templateUrl: './student-internships.component.html',
  styleUrls: ['./student-internships.component.css']
})
export class StudentInternshipsComponent implements OnInit {

  faStar = faStar;
  faSearch = faSearch;

  internships = []
  constructor(private internshipService: InternshipService) { }

  ngOnInit() {
    this.internshipService.get().then(res => {
      this.internships = res;
    });
  }

}
