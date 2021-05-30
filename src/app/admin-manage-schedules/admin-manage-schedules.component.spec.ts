import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageSchedulesComponent } from './admin-manage-schedules.component';

describe('AdminManageSchedulesComponent', () => {
  let component: AdminManageSchedulesComponent;
  let fixture: ComponentFixture<AdminManageSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
