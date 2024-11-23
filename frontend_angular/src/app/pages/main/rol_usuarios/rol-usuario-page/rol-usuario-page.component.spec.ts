import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUsuarioPageComponent } from './rol-usuario-page.component';

describe('RolUsuarioPageComponent', () => {
  let component: RolUsuarioPageComponent;
  let fixture: ComponentFixture<RolUsuarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolUsuarioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
