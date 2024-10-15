import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosRealizadosEditPageComponent } from './estudios-realizados-edit-page.component';

describe('EstudiosRealizadosEditPageComponent', () => {
  let component: EstudiosRealizadosEditPageComponent;
  let fixture: ComponentFixture<EstudiosRealizadosEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudiosRealizadosEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosRealizadosEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
