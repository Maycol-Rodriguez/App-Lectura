import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeaStatisticsForstudentCuestionarioPage } from './tea-statistics-forstudent-cuestionario.page';

describe('TeaStatisticsForstudentCuestionarioPage', () => {
  let component: TeaStatisticsForstudentCuestionarioPage;
  let fixture: ComponentFixture<TeaStatisticsForstudentCuestionarioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaStatisticsForstudentCuestionarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeaStatisticsForstudentCuestionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
