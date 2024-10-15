import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDepartamentoEditPageComponent } from './docente-departamento-edit-page.component';

describe('DocenteDepartamentoEditPageComponent', () => {
  let component: DocenteDepartamentoEditPageComponent;
  let fixture: ComponentFixture<DocenteDepartamentoEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteDepartamentoEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteDepartamentoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
