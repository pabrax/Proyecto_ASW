import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoProfesoralCreatePageComponent } from './apoyo-profesoral-create-page.component';

describe('ApoyoProfesoralCreatePageComponent', () => {
  let component: ApoyoProfesoralCreatePageComponent;
  let fixture: ComponentFixture<ApoyoProfesoralCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoyoProfesoralCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyoProfesoralCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
