import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvViewerHeaderComponent } from './uv-viewer-header.component';

describe('UvViewerHeaderComponent', () => {
  let component: UvViewerHeaderComponent;
  let fixture: ComponentFixture<UvViewerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvViewerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvViewerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
