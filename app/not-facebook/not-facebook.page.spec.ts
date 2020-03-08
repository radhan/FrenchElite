import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotFacebookPage } from './not-facebook.page';

describe('NotFacebookPage', () => {
  let component: NotFacebookPage;
  let fixture: ComponentFixture<NotFacebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFacebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFacebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
