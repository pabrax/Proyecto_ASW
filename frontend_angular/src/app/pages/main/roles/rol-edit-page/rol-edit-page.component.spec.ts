import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEditPageComponent } from './rol-edit-page.component';

describe('RolEditPageComponent', () => {
  let component: RolEditPageComponent;
  let fixture: ComponentFixture<RolEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
