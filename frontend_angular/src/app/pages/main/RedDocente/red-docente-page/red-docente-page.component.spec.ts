import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedDocentePageComponent } from './red-docente-page.component';

describe('RedDocentePageComponent', () => {
  let component: RedDocentePageComponent;
  let fixture: ComponentFixture<RedDocentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedDocentePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedDocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
