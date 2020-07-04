import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantierEditComponent } from './santier-edit.component';

describe('SantierEditComponent', () => {
  let component: SantierEditComponent;
  let fixture: ComponentFixture<SantierEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantierEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
