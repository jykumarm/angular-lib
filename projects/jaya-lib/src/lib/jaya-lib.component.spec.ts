import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JayaLibComponent } from './jaya-lib.component';

describe('JayaLibComponent', () => {
  let component: JayaLibComponent;
  let fixture: ComponentFixture<JayaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JayaLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JayaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
