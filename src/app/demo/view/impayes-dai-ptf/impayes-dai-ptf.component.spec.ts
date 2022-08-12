import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpayesDaiPtfComponent } from './impayes-dai-ptf.component';

describe('ImpayesDaiPtfComponent', () => {
  let component: ImpayesDaiPtfComponent;
  let fixture: ComponentFixture<ImpayesDaiPtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpayesDaiPtfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpayesDaiPtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
