import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetInputComponent } from './reset-input.component';

describe('ResetInputComponent', () => {
  let component: ResetInputComponent;
  let fixture: ComponentFixture<ResetInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
