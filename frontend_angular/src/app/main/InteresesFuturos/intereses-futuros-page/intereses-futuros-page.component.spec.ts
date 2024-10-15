import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresesFuturosPageComponent } from './intereses-futuros-page.component';

describe('InteresesFuturosPageComponent', () => {
  let component: InteresesFuturosPageComponent;
  let fixture: ComponentFixture<InteresesFuturosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteresesFuturosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresesFuturosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
