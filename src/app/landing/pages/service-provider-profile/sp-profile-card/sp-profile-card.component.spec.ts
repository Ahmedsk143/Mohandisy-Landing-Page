import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpProfileCardComponent } from './sp-profile-card.component';

describe('SpProfileCardComponent', () => {
  let component: SpProfileCardComponent;
  let fixture: ComponentFixture<SpProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpProfileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
