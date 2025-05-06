import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDashboardComponent } from './learn-dashboard.component';

describe('LearnDashboardComponent', () => {
  let component: LearnDashboardComponent;
  let fixture: ComponentFixture<LearnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
