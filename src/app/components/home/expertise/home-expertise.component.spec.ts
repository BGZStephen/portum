import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExpertiseComponent } from './home-expertise.component';

describe('HomeExpertiseComponent', () => {
  let component: HomeExpertiseComponent;
  let fixture: ComponentFixture<HomeExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
