import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabofficeAddComponent } from './laboffice-add.component';

describe('LabofficeAddComponent', () => {
  let component: LabofficeAddComponent;
  let fixture: ComponentFixture<LabofficeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabofficeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabofficeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
