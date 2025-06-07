import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicComponent } from './ionic.component';

describe('IonicComponent', () => {
  let component: IonicComponent;
  let fixture: ComponentFixture<IonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
