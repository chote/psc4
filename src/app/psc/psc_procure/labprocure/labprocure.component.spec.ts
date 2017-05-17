import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabprocureComponent } from './labprocure.component';

describe('LabprocureComponent', () => {
  let component: LabprocureComponent;
  let fixture: ComponentFixture<LabprocureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabprocureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabprocureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
