import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommonComponent } from './list-common.component';

describe('ListCommonComponent', () => {
  let component: ListCommonComponent;
  let fixture: ComponentFixture<ListCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
