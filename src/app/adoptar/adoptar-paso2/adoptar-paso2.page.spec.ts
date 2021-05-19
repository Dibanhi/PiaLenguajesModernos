import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptarPaso2Page } from './adoptar-paso2.page';

describe('AdoptarPaso2Page', () => {
  let component: AdoptarPaso2Page;
  let fixture: ComponentFixture<AdoptarPaso2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarPaso2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptarPaso2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
