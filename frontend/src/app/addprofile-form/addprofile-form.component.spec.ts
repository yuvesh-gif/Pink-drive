import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofileFormComponent } from './addprofile-form.component';

describe('AddprofileFormComponent', () => {
  let component: AddprofileFormComponent;
  let fixture: ComponentFixture<AddprofileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
