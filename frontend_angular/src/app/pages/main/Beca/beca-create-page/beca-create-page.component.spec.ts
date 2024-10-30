import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaCreatePageComponent } from './beca-create-page.component';

describe('BecaCreatePageComponent', () => {
  let component: BecaCreatePageComponent;
  let fixture: ComponentFixture<BecaCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecaCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecaCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
