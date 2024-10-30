import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDepartamentoPageComponent } from './docente-departamento-page.component';

describe('DocenteDepartamentoPageComponent', () => {
  let component: DocenteDepartamentoPageComponent;
  let fixture: ComponentFixture<DocenteDepartamentoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteDepartamentoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteDepartamentoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
