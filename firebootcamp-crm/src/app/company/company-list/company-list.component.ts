import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from 'src/app/company/company';
import { CompanyService } from '../company.service';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
  ) {}

  componentExists = true;
  companies$: Observable<Company[]>;

  ngOnInit() {
    this.initCompanies();
  }

  initCompanies(){
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(id: number){
    this.companyService.deleteCompany(id)
    .subscribe(c => this.initCompanies());
  }

}
