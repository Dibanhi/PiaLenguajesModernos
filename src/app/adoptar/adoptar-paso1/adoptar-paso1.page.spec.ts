import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptarPaso1Page } from './adoptar-paso1.page';

describe('AdoptarPaso1Page', () => {
  let component: AdoptarPaso1Page;
  let fixture: ComponentFixture<AdoptarPaso1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarPaso1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptarPaso1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
