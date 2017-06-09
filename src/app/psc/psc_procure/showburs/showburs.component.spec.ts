import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbursComponent } from './showburs.component';

describe('ShowbursComponent', () => {
  let component: ShowbursComponent;
  let fixture: ComponentFixture<ShowbursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
