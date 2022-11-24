import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentLibroPage } from './tea-statistics-forstudent-libro.page';

describe('TeaStatisticsForstudentLibroPage', () => {
  let component: TeaStatisticsForstudentLibroPage;
  let fixture: ComponentFixture<TeaStatisticsForstudentLibroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaStatisticsForstudentLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeaStatisticsForstudentLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
