import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company/company';
import { CompanyService } from '../company.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {


  constructor(
    private companyService: CompanyService,
    private httpClient: HttpClient
  ) {}


  companies: Company[];

  ngOnInit() {
    this.companyService.getCompanies()
      .subscribe(next => this.companies = next);
  }


}
