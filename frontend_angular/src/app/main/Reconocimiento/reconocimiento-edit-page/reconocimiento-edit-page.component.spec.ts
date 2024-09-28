import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoEditPageComponent } from './reconocimiento-edit-page.component';

describe('ReconocimientoEditPageComponent', () => {
  let component: ReconocimientoEditPageComponent;
  let fixture: ComponentFixture<ReconocimientoEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconocimientoEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconocimientoEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
