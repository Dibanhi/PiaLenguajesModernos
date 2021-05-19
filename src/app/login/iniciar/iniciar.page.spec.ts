import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciarPage } from './iniciar.page';

describe('IniciarPage', () => {
  let component: IniciarPage;
  let fixture: ComponentFixture<IniciarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
