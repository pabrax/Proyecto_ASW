import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosRealizadosPageComponent } from './estudios-realizados-page.component';

describe('EstudiosRealizadosPageComponent', () => {
  let component: EstudiosRealizadosPageComponent;
  let fixture: ComponentFixture<EstudiosRealizadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosRealizadosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosRealizadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
