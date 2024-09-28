import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoCreatePageComponent } from './reconocimiento-create-page.component';

describe('ReconocimientoCreatePageComponent', () => {
  let component: ReconocimientoCreatePageComponent;
  let fixture: ComponentFixture<ReconocimientoCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconocimientoCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconocimientoCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
