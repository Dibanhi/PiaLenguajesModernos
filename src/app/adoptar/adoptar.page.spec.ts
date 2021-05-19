import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdoptarPage } from './adoptar.page';

describe('AdoptarPage', () => {
  let component: AdoptarPage;
  let fixture: ComponentFixture<AdoptarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
