import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierListComponent } from './bier-list.component';

describe('BierListComponent', () => {
  let component: BierListComponent;
  let fixture: ComponentFixture<BierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
