import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationNavbarComponent } from './aplication-navbar.component';

describe('AplicationNavbarComponent', () => {
  let component: AplicationNavbarComponent;
  let fixture: ComponentFixture<AplicationNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicationNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
