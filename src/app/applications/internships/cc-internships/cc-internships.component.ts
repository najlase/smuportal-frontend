import { Component, OnInit } from '@angular/core';
import {faPen, faPlusCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {InternshipService} from "@app/shared/services/internship.service";
import {Internship} from "@app/shared/models/internship.model";
import {Company} from "@app/shared/models/company.model";
import {CompanyService} from "@app/shared/services/company.service";

@Component({
  selector: 'app-cc-internships',
  templateUrl: './cc-internships.component.html',
  styleUrls: ['./cc-internships.component.css']
})
export class CcInternshipsComponent implements OnInit {

  faPen = faPen;
  faSearch = faSearch;
  faAdd = faPlusCircle;

  internships: Internship[] = []
  editedInternship: Internship = null;
  editedInternshipIndex = -1;

  createdInternship: Internship = {_id: null, Title: '', Company: null, IsArchived: false, Deadline: null, Description: '', Domain: '', Duration: '', Location: '', StartingDate: null};

  internshipFilters = {Title: '', Domain: '', Location: '', Deadline: null, Duration: '', StartingDate: null, HideArchived: false}
  companies: Company[] = [];
  isDetailedView: boolean[] = [];

  constructor(private internshipService: InternshipService, private companyService: CompanyService) { }

  ngOnInit() {
    this.internshipService.getAll().then(res => {
      this.internships = res;
      for(let i = 0; i < this.internships.length; i++)
        this.isDetailedView.push(false);
    });
    this.companyService.get().then(res => {
      this.companies = res;
    })
  }

  filter(){
    this.internshipService.filterAll(this.internshipFilters).then(res => {
      this.internships = res;
    });
  }

  selectForEdit(index: number)
  {
    this.editedInternship = Object.assign({}, this.internships[index]);
    this.editedInternshipIndex = index;
  }

  archive(index :number)
  {
    this.internshipService.archive(this.internships[index]._id).then( res =>
    {
      this.internships[index].IsArchived = true;
    });
  }

  restore(index :number)
  {
    this.internshipService.restore(this.internships[index]._id).then( res =>
    {
      this.internships[index].IsArchived = false;
    });
  }

  saveEdit()
  {
    this.internshipService.update(this.editedInternship).then(res => {
      this.internships[this.editedInternshipIndex] = this.editedInternship;
    });
  }

  create(){
    this.internshipService.create(this.createdInternship).then(res => {
      this.createdInternship._id = res._id;
      this.internships.unshift(this.createdInternship);
      this.createdInternship = {_id: null, Title: '', Company: null, IsArchived: false, Deadline: null, Description: '', Domain: '', Duration: '', Location: '', StartingDate: null};
    })
  }

  toggleDetails(index: number)
  {
    this.isDetailedView[index] = !this.isDetailedView[index];
  }

}
