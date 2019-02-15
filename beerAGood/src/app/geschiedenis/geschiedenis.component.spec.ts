import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschiedenisComponent } from './geschiedenis.component';

describe('GeschiedenisComponent', () => {
  let component: GeschiedenisComponent;
  let fixture: ComponentFixture<GeschiedenisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschiedenisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschiedenisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
