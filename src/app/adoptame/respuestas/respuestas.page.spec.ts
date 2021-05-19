import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespuestasPage } from './respuestas.page';

describe('RespuestasPage', () => {
  let component: RespuestasPage;
  let fixture: ComponentFixture<RespuestasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespuestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
