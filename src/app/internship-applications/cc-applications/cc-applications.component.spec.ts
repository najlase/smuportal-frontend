import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcApplicationsComponent } from './cc-applications.component';

describe('CcApplicationsComponent', () => {
  let component: CcApplicationsComponent;
  let fixture: ComponentFixture<CcApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
