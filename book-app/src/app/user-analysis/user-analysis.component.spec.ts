import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnalysisComponent } from './user-analysis.component';

describe('UserAnalysisComponent', () => {
  let component: UserAnalysisComponent;
  let fixture: ComponentFixture<UserAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAnalysisComponent]
    });
    fixture = TestBed.createComponent(UserAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
