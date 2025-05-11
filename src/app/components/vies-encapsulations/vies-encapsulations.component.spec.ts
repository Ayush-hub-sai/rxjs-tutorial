import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViesEncapsulationsComponent } from './vies-encapsulations.component';

describe('ViesEncapsulationsComponent', () => {
  let component: ViesEncapsulationsComponent;
  let fixture: ComponentFixture<ViesEncapsulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViesEncapsulationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViesEncapsulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
