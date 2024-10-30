import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDocenteCreatePageComponent } from './red-docente-create-page.component';

describe('RedDocenteCreatePageComponent', () => {
  let component: RedDocenteCreatePageComponent;
  let fixture: ComponentFixture<RedDocenteCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedDocenteCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDocenteCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
