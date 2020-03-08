import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbgraphComponent } from './dbgraph.component';

describe('DbgraphComponent', () => {
  let component: DbgraphComponent;
  let fixture: ComponentFixture<DbgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
