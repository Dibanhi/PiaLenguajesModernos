import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptarPaso4Page } from './adoptar-paso4.page';

describe('AdoptarPaso4Page', () => {
  let component: AdoptarPaso4Page;
  let fixture: ComponentFixture<AdoptarPaso4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarPaso4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptarPaso4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
