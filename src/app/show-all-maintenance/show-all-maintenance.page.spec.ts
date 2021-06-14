import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowAllMaintenancePage } from './show-all-maintenance.page';

describe('ShowAllMaintenancePage', () => {
  let component: ShowAllMaintenancePage;
  let fixture: ComponentFixture<ShowAllMaintenancePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllMaintenancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowAllMaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
