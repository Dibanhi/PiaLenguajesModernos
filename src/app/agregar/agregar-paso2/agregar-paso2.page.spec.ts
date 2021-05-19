import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarPaso2Page } from './agregar-paso2.page';

describe('AgregarPaso2Page', () => {
  let component: AgregarPaso2Page;
  let fixture: ComponentFixture<AgregarPaso2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPaso2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPaso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
