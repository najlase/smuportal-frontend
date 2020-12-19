import { Component, OnInit } from '@angular/core';
import {faSearch, faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-student-internships',
  templateUrl: './student-internships.component.html',
  styleUrls: ['./student-internships.component.css']
})
export class StudentInternshipsComponent implements OnInit {

  faStar = faStar;
  faSearch = faSearch;

  internships = [
    {Title: 'Some Title', Domain: 'SE', Company: {Name: 'Microsoft', Description: 'ssssss', Logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png'}, Description: 'Some description aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', Location: 'Tunis', Deadline: '12/12/2020', Duration: '3 months'},
    {Title: 'Some Title', Domain: 'SE', Company: {Name: 'Orange TN', Description: 'ssssss', Logo: 'https://logoeps.com/wp-content/uploads/2011/06/orange-logo-vector.png'}, Description: 'Some description', Location: 'Tunis', Deadline: '12/12/2020', Duration: '3 months'},
    {Title: 'Some Title', Domain: 'SE', Company: {Name: 'Orange TN', Description: 'ssssss', Logo: 'https://logoeps.com/wp-content/uploads/2011/06/orange-logo-vector.png'}, Description: 'Some description', Location: 'Tunis', Deadline: '12/12/2020', Duration: '3 months'},
    {Title: 'Some Title', Domain: 'SE', Company: {Name: 'Orange TN', Description: 'ssssss', Logo: 'https://logoeps.com/wp-content/uploads/2011/06/orange-logo-vector.png'}, Description: 'Some description', Location: 'Tunis', Deadline: '12/12/2020', Duration: '3 months'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
