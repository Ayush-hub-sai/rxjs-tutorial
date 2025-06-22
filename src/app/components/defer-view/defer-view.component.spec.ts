import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferViewComponent } from './defer-view.component';

describe('DeferViewComponent', () => {
  let component: DeferViewComponent;
  let fixture: ComponentFixture<DeferViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
