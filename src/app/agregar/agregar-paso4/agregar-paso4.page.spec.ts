import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarPaso4Page } from './agregar-paso4.page';

describe('AgregarPaso4Page', () => {
  let component: AgregarPaso4Page;
  let fixture: ComponentFixture<AgregarPaso4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPaso4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPaso4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
