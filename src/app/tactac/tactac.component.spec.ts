import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TactacComponent } from './tactac.component';

describe('TactacComponent', () => {
  let component: TactacComponent;
  let fixture: ComponentFixture<TactacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TactacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TactacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
