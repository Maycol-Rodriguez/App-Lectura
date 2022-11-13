import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentPage } from './tea-statistics-forstudent.page';

describe('TeaStatisticsForstudentPage', () => {
  let component: TeaStatisticsForstudentPage;
  let fixture: ComponentFixture<TeaStatisticsForstudentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaStatisticsForstudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeaStatisticsForstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
