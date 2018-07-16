import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExtendedComponent } from './cv-extended.component';

describe('CvExtendedComponent', () => {
  let component: CvExtendedComponent;
  let fixture: ComponentFixture<CvExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
