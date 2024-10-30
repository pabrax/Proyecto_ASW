import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionDocenteEditPageComponent } from './evaluacion-docente-edit-page.component';

describe('EvaluacionDocenteEditPageComponent', () => {
  let component: EvaluacionDocenteEditPageComponent;
  let fixture: ComponentFixture<EvaluacionDocenteEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionDocenteEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionDocenteEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
