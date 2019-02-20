import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarBotComponent } from './nav-bar-bot.component';

describe('NavBarBotComponent', () => {
  let component: NavBarBotComponent;
  let fixture: ComponentFixture<NavBarBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
