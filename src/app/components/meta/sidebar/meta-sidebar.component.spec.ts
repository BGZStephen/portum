import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaSidebarComponent } from './meta-sidebar.component';

describe('MetaSidebarComponent', () => {
  let component: MetaSidebarComponent;
  let fixture: ComponentFixture<MetaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
