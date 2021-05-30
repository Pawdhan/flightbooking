import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAirlinesComponent } from './admin-manage-airlines.component';

describe('AdminManageAirlinesComponent', () => {
  let component: AdminManageAirlinesComponent;
  let fixture: ComponentFixture<AdminManageAirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminManageAirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
