import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocentePageComponent } from './evaluacion-docente-page.component';

describe('EvaluacionDocentePageComponent', () => {
  let component: EvaluacionDocentePageComponent;
  let fixture: ComponentFixture<EvaluacionDocentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionDocentePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionDocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
