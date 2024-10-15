import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAcCreatePageComponent } from './estudio-ac-create-page.component';

describe('EstudioAcCreatePageComponent', () => {
  let component: EstudioAcCreatePageComponent;
  let fixture: ComponentFixture<EstudioAcCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudioAcCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioAcCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
