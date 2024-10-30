import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosRealizadosCreatePageComponent } from './estudios-realizados-create-page.component';

describe('EstudiosRealizadosCreatePageComponent', () => {
  let component: EstudiosRealizadosCreatePageComponent;
  let fixture: ComponentFixture<EstudiosRealizadosCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosRealizadosCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosRealizadosCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
