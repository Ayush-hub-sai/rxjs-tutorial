import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererTutorialComponent } from './renderer-tutorial.component';

describe('RendererTutorialComponent', () => {
  let component: RendererTutorialComponent;
  let fixture: ComponentFixture<RendererTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendererTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RendererTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
