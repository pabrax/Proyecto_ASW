import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliadoCreatePageComponent } from './aliado-create-page.component';

describe('AliadoCreatePageComponent', () => {
  let component: AliadoCreatePageComponent;
  let fixture: ComponentFixture<AliadoCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliadoCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliadoCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
