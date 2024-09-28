import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoProfesoralEditPageComponent } from './apoyo-profesoral-edit-page.component';

describe('ApoyoProfesoralEditPageComponent', () => {
  let component: ApoyoProfesoralEditPageComponent;
  let fixture: ComponentFixture<ApoyoProfesoralEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoyoProfesoralEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyoProfesoralEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
