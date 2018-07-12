import { AppComponent } from "src/app/app.component";

describe('App Component', () => {
  it('1+1=2', () =>{
    expect(1+1).toEqual(2);
  })

  // it('1+1=3 (this is supposed to fail)', () =>{
  //   expect(1+1).toEqual(3);
  // })

  it('title equals Melbourne', () => {
    const appComponent = new AppComponent();

    expect(appComponent.title).toEqual("Melbourne");
  })
});
