import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BierFormComponent } from './bier-form.component';

describe('BierFormComponent', () => {
  let component: BierFormComponent;
  let fixture: ComponentFixture<BierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
