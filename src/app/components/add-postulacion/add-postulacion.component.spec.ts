import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostulacionComponent } from './add-postulacion.component';

describe('AddPostulacionComponent', () => {
  let component: AddPostulacionComponent;
  let fixture: ComponentFixture<AddPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
