import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabofficeComponent } from './laboffice.component';

describe('LabofficeComponent', () => {
  let component: LabofficeComponent;
  let fixture: ComponentFixture<LabofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
