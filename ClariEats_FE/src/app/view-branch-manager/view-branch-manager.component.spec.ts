import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBranchManagerComponent } from './view-branch-manager.component';

describe('ViewBranchManagerComponent', () => {
  let component: ViewBranchManagerComponent;
  let fixture: ComponentFixture<ViewBranchManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBranchManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
