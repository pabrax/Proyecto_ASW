import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUsuarioEditPageComponent } from './rol-usuario-edit-page.component';

describe('RolUsuarioEditPageComponent', () => {
  let component: RolUsuarioEditPageComponent;
  let fixture: ComponentFixture<RolUsuarioEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolUsuarioEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolUsuarioEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
