import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIssuesComponent } from './html-issues.component';

describe('HtmlIssuesComponent', () => {
  let component: HtmlIssuesComponent;
  let fixture: ComponentFixture<HtmlIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlIssuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
