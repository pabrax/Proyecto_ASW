import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolCreatePageComponent } from './rol-create-page.component';

describe('RolCreatePageComponent', () => {
  let component: RolCreatePageComponent;
  let fixture: ComponentFixture<RolCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolCreatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
