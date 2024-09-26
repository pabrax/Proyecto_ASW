import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationHeaderComponent } from './aplication-header.component';

describe('AplicationHeaderComponent', () => {
  let component: AplicationHeaderComponent;
  let fixture: ComponentFixture<AplicationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplicationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
