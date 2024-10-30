import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioAcEditPageComponent } from './estudio-ac-edit-page.component';

describe('EstudioAcEditPageComponent', () => {
  let component: EstudioAcEditPageComponent;
  let fixture: ComponentFixture<EstudioAcEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstudioAcEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudioAcEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
