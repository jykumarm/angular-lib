import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerLoadingHomeComponent } from './eager-loading-home.component';

describe('EagerLoadingHomeComponent', () => {
  let component: EagerLoadingHomeComponent;
  let fixture: ComponentFixture<EagerLoadingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerLoadingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerLoadingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
