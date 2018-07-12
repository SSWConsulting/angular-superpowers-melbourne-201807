import { Component, OnInit } from '@angular/core';
import { Company } from './company/company';
import { CompanyService } from './company/company.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'fbc';
  companyCount$: Observable<number>;

  constructor(
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyCount$ = this.companyService.getCompanies()
      .pipe(map(c => c.length));
  }

}
