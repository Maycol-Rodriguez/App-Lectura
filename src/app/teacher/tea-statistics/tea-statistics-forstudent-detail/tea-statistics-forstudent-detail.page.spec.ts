import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentDetailPage } from './tea-statistics-forstudent-detail.page';

describe('TeaStatisticsForstudentDetailPage', () => {
  let component: TeaStatisticsForstudentDetailPage;
  let fixture: ComponentFixture<TeaStatisticsForstudentDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaStatisticsForstudentDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeaStatisticsForstudentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
