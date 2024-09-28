import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedEditPageComponent } from './red-edit-page.component';

describe('RedEditPageComponent', () => {
  let component: RedEditPageComponent;
  let fixture: ComponentFixture<RedEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedEditPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
