import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildNgContentComponent } from './view-child-ng-content.component';

describe('ViewChildNgContentComponent', () => {
  let component: ViewChildNgContentComponent;
  let fixture: ComponentFixture<ViewChildNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildNgContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
