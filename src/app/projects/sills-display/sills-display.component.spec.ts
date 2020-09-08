import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillsDisplayComponent } from './sills-display.component';

describe('SillsDisplayComponent', () => {
  let component: SillsDisplayComponent;
  let fixture: ComponentFixture<SillsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
