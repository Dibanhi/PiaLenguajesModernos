import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptamePage } from './adoptame.page';

describe('AdoptamePage', () => {
  let component: AdoptamePage;
  let fixture: ComponentFixture<AdoptamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
