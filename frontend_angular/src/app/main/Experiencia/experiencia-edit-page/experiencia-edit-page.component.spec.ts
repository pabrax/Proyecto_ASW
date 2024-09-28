import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEditPageComponent } from './experiencia-edit-page.component';

describe('ExperienciaEditPageComponent', () => {
  let component: ExperienciaEditPageComponent;
  let fixture: ComponentFixture<ExperienciaEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienciaEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
