import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankPropertiesChangesPage } from './tank-properties-changes.page';

describe('TankPropertiesChangesPage', () => {
  let component: TankPropertiesChangesPage;
  let fixture: ComponentFixture<TankPropertiesChangesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TankPropertiesChangesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankPropertiesChangesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
