import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchcaptchaComponent } from './fetchcaptcha.component';

describe('FetchcaptchaComponent', () => {
  let component: FetchcaptchaComponent;
  let fixture: ComponentFixture<FetchcaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchcaptchaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchcaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
