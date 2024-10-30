import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedPageComponent } from './red-page.component';

describe('RedPageComponent', () => {
  let component: RedPageComponent;
  let fixture: ComponentFixture<RedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
