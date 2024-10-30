import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaPageComponent } from './beca-page.component';

describe('BecaPageComponent', () => {
  let component: BecaPageComponent;
  let fixture: ComponentFixture<BecaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
