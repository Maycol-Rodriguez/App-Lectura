import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeaStatisticsGlobalPage } from './tea-statistics-global.page';

describe('TeaStatisticsGlobalPage', () => {
  let component: TeaStatisticsGlobalPage;
  let fixture: ComponentFixture<TeaStatisticsGlobalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaStatisticsGlobalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeaStatisticsGlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
