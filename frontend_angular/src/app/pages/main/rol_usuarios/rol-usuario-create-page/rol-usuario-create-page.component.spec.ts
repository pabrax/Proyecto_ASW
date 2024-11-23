import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUsuarioCreatePageComponent } from './rol-usuario-create-page.component';

describe('RolUsuarioCreatePageComponent', () => {
  let component: RolUsuarioCreatePageComponent;
  let fixture: ComponentFixture<RolUsuarioCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolUsuarioCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolUsuarioCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
