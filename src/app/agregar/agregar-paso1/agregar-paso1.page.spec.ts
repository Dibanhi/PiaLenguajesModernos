import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarPaso1Page } from './agregar-paso1.page';

describe('AgregarPaso1Page', () => {
  let component: AgregarPaso1Page;
  let fixture: ComponentFixture<AgregarPaso1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPaso1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarPaso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
