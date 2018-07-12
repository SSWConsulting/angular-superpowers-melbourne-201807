import { AppComponent } from "src/app/app.component";
import { CompanyService } from "src/app/company/company.service";
import { of } from "rxjs/internal/observable/of";

describe('App Component', () => {
  var companySvc;
  var appComponent;

  beforeAll(() => {
    companySvc = {
      getCompanies : () => of([{
        name: "Fake company",
        phone: 1234,
        email: "Fake@fake.com"
      }])
    }

  });

  it('1+1=2', () =>{
    expect(1+1).toEqual(2);
  })

  // it('1+1=3 (this is supposed to fail)', () =>{
  //   expect(1+1).toEqual(3);
  // })

  it('title equals Melbourne', () => {
    const appComponent = new AppComponent(null);

    expect(appComponent.title).toEqual("Melbourne");
  })

  it('check the company count', () => {
    appComponent = new AppComponent(companySvc);
    appComponent.ngOnInit();

    appComponent.companyCount$.subscribe(c => {
      expect(c).toEqual(1);
    });
  });
});
