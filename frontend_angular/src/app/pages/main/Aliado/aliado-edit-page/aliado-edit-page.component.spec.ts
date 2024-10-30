import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliadoEditPageComponent } from './aliado-edit-page.component';

describe('AliadoEditPageComponent', () => {
  let component: AliadoEditPageComponent;
  let fixture: ComponentFixture<AliadoEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliadoEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliadoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
