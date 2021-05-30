import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageBookingsComponent } from './user-manage-bookings.component';

describe('UserManageBookingsComponent', () => {
  let component: UserManageBookingsComponent;
  let fixture: ComponentFixture<UserManageBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
