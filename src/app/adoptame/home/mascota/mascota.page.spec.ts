import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MascotaPage } from './mascota.page';

describe('MascotaPage', () => {
  let component: MascotaPage;
  let fixture: ComponentFixture<MascotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
