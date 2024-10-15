import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresesFuturosCreatePageComponent } from './intereses-futuros-create-page.component';

describe('InteresesFuturosCreatePageComponent', () => {
  let component: InteresesFuturosCreatePageComponent;
  let fixture: ComponentFixture<InteresesFuturosCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteresesFuturosCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresesFuturosCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
