import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersTabPage } from './usersTab.page';

describe('UsersTabPage', () => {
  let component: UsersTabPage;
  let fixture: ComponentFixture<UsersTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersTabPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
