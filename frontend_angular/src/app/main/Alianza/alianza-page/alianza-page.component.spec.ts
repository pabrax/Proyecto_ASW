import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzaPageComponent } from './alianza-page.component';

describe('AlianzaPageComponent', () => {
  let component: AlianzaPageComponent;
  let fixture: ComponentFixture<AlianzaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlianzaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlianzaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
