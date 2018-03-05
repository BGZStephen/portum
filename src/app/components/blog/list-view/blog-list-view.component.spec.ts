import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListViewComponent } from './blog-list-view.component';

describe('BlogListViewComponent', () => {
  let component: BlogListViewComponent;
  let fixture: ComponentFixture<BlogListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
