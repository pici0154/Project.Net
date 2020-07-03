import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantierDetailsComponent } from './santier-details.component';

describe('SantierDetailsComponent', () => {
  let component: SantierDetailsComponent;
  let fixture: ComponentFixture<SantierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
