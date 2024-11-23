import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditPageComponent } from './usuario-edit-page.component';

describe('UsuarioEditPageComponent', () => {
  let component: UsuarioEditPageComponent;
  let fixture: ComponentFixture<UsuarioEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
