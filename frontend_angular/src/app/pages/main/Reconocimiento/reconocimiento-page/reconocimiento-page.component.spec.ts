import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconocimientoPageComponent } from './reconocimiento-page.component';

describe('ReconocimientoPageComponent', () => {
  let component: ReconocimientoPageComponent;
  let fixture: ComponentFixture<ReconocimientoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReconocimientoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReconocimientoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
