import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteresanPage } from './interesan.page';

describe('InteresanPage', () => {
  let component: InteresanPage;
  let fixture: ComponentFixture<InteresanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteresanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
