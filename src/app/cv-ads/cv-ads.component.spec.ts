import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAdsComponent } from './cv-ads.component';

describe('CvAdsComponent', () => {
  let component: CvAdsComponent;
  let fixture: ComponentFixture<CvAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
