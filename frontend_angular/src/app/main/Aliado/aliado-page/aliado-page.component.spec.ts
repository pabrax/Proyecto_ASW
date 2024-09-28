import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliadoPageComponent } from './aliado-page.component';

describe('AliadoPageComponent', () => {
  let component: AliadoPageComponent;
  let fixture: ComponentFixture<AliadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliadoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
