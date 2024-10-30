import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaEditPageComponent } from './beca-edit-page.component';

describe('BecaEditPageComponent', () => {
  let component: BecaEditPageComponent;
  let fixture: ComponentFixture<BecaEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecaEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
