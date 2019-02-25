import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatieListComponent } from './locatie-list.component';

describe('LocatieListComponent', () => {
  let component: LocatieListComponent;
  let fixture: ComponentFixture<LocatieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
