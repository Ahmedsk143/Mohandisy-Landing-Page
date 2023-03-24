import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprovidersWorkComponent } from './sproviders-work.component';

describe('SprovidersWorkComponent', () => {
  let component: SprovidersWorkComponent;
  let fixture: ComponentFixture<SprovidersWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprovidersWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprovidersWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
