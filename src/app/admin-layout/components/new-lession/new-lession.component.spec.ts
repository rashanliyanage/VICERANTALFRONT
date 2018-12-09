import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLessionComponent } from './new-lession.component';

describe('NewLessionComponent', () => {
  let component: NewLessionComponent;
  let fixture: ComponentFixture<NewLessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
