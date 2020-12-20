import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcInternshipsComponent } from './cc-internships.component';

describe('CcInternshipsComponent', () => {
  let component: CcInternshipsComponent;
  let fixture: ComponentFixture<CcInternshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcInternshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
