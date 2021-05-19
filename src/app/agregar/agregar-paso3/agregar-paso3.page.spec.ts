import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarPaso3Page } from './agregar-paso3.page';

describe('AgregarPaso3Page', () => {
  let component: AgregarPaso3Page;
  let fixture: ComponentFixture<AgregarPaso3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPaso3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPaso3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
