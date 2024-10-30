import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresesFuturosEditPageComponent } from './intereses-futuros-edit-page.component';

describe('InteresesFuturosEditPageComponent', () => {
  let component: InteresesFuturosEditPageComponent;
  let fixture: ComponentFixture<InteresesFuturosEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteresesFuturosEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteresesFuturosEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
