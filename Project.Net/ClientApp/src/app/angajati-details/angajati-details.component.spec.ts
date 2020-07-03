import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngajatiDetailsComponent } from './angajati-details.component';

describe('CostItemDetailsComponent', () => {
    let component: AngajatiDetailsComponent;
    let fixture: ComponentFixture<AngajatiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AngajatiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(AngajatiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
