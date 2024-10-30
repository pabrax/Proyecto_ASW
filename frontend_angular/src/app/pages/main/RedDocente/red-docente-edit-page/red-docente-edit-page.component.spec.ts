import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDocenteEditPageComponent } from './red-docente-edit-page.component';

describe('RedDocenteEditPageComponent', () => {
  let component: RedDocenteEditPageComponent;
  let fixture: ComponentFixture<RedDocenteEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedDocenteEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDocenteEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
