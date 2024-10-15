import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteEditPageComponent } from './docente-edit-page.component';

describe('DocenteEditPageComponent', () => {
  let component: DocenteEditPageComponent;
  let fixture: ComponentFixture<DocenteEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
