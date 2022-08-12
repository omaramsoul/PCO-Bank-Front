import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorisationsComponent } from './autorisations.component';

describe('AutorisationsComponent', () => {
  let component: AutorisationsComponent;
  let fixture: ComponentFixture<AutorisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorisationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
