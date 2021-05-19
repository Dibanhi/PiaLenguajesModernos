import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptarPaso3Page } from './adoptar-paso3.page';

describe('AdoptarPaso3Page', () => {
  let component: AdoptarPaso3Page;
  let fixture: ComponentFixture<AdoptarPaso3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarPaso3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptarPaso3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
