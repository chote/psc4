import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcureComponent } from './procure.component';

describe('ProcureComponent', () => {
  let component: ProcureComponent;
  let fixture: ComponentFixture<ProcureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
