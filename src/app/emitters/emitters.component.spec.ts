import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmittersComponent } from './emitters.component';

describe('EmittersComponent', () => {
  let component: EmittersComponent;
  let fixture: ComponentFixture<EmittersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmittersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
