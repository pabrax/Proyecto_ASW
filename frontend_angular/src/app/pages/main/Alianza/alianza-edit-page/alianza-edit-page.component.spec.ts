import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzaEditPageComponent } from './alianza-edit-page.component';

describe('AlianzaEditPageComponent', () => {
  let component: AlianzaEditPageComponent;
  let fixture: ComponentFixture<AlianzaEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlianzaEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlianzaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
