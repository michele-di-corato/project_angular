import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidaysTabPage } from './holidaysTab.page';

describe('HolidaysTabPage', () => {
  let component: HolidaysTabPage;
  let fixture: ComponentFixture<HolidaysTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidaysTabPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(HolidaysTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
