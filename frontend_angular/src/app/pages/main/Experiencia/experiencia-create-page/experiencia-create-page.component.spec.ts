import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaCreatePageComponent } from './experiencia-create-page.component';

describe('ExperienciaCreatePageComponent', () => {
  let component: ExperienciaCreatePageComponent;
  let fixture: ComponentFixture<ExperienciaCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciaCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
