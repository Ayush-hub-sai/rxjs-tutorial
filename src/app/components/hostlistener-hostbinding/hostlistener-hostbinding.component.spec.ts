import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlistenerHostbindingComponent } from './hostlistener-hostbinding.component';

describe('HostlistenerHostbindingComponent', () => {
  let component: HostlistenerHostbindingComponent;
  let fixture: ComponentFixture<HostlistenerHostbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostlistenerHostbindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostlistenerHostbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
