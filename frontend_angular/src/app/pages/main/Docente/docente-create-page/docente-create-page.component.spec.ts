import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCreatePageComponent } from './docente-create-page.component';

describe('DocenteCreatePageComponent', () => {
  let component: DocenteCreatePageComponent;
  let fixture: ComponentFixture<DocenteCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocenteCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocenteCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
