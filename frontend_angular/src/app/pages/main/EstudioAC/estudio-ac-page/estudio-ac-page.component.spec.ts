import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAcPageComponent } from './estudio-ac-page.component';

describe('EstudioAcPageComponent', () => {
  let component: EstudioAcPageComponent;
  let fixture: ComponentFixture<EstudioAcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudioAcPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioAcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
