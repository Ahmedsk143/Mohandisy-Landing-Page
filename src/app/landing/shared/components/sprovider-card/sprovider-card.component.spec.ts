import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproviderCardComponent } from './sprovider-card.component';

describe('SproviderCardComponent', () => {
  let component: SproviderCardComponent;
  let fixture: ComponentFixture<SproviderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SproviderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SproviderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
