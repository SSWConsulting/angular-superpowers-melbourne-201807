import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { FormBuilder, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder

  ) { }

  companyId: number;
  isNewCompany: boolean;
  companyForm: FormGroup;

  ngOnInit() {
    this.companyId = ~~(this.activatedRoute.snapshot.params['id']);
    this.isNewCompany = this.companyId === 0;
    this.buildForm();

    if(!this.isNewCompany){
      this.companyService.getCompany(this.companyId).subscribe(c => {
        this.companyForm.patchValue(c);
      });
    }
  }

  buildForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      phone: [''],
      email: ['']
    });
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value);
    } else {
      const newCompany = {...this.companyForm.value, id: this.companyId };
      this.companyService.updateCompany(newCompany);
    }
    this.router.navigate(['/company/list']);
  }

}
