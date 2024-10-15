import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteDepartamentoCreatePageComponent } from './docente-departamento-create-page.component';

describe('DocenteDepartamentoCreatePageComponent', () => {
  let component: DocenteDepartamentoCreatePageComponent;
  let fixture: ComponentFixture<DocenteDepartamentoCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteDepartamentoCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteDepartamentoCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
