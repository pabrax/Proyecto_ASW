import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedCreatePageComponent } from './red-create-page.component';

describe('RedCreatePageComponent', () => {
  let component: RedCreatePageComponent;
  let fixture: ComponentFixture<RedCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
