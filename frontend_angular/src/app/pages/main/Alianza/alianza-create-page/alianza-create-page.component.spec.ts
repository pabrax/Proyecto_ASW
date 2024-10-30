import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzaCreatePageComponent } from './alianza-create-page.component';

describe('AlianzaCreatePageComponent', () => {
  let component: AlianzaCreatePageComponent;
  let fixture: ComponentFixture<AlianzaCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlianzaCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlianzaCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
