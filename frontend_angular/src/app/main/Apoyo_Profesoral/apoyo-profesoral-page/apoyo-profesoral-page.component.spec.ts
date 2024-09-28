import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoProfesoralPageComponent } from './apoyo-profesoral-page.component';

describe('ApoyoProfesoralPageComponent', () => {
  let component: ApoyoProfesoralPageComponent;
  let fixture: ComponentFixture<ApoyoProfesoralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoyoProfesoralPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoyoProfesoralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
