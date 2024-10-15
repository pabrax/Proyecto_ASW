import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentePageComponent } from './docente-page.component';

describe('DocentePageComponent', () => {
  let component: DocentePageComponent;
  let fixture: ComponentFixture<DocentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
