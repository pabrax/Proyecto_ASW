import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteCreatePageComponent } from './evaluacion-docente-create-page.component';

describe('EvaluacionDocenteCreatePageComponent', () => {
  let component: EvaluacionDocenteCreatePageComponent;
  let fixture: ComponentFixture<EvaluacionDocenteCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionDocenteCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionDocenteCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
