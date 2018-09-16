import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioeliminarComponent } from './formularioeliminar.component';

describe('FormularioeliminarComponent', () => {
  let component: FormularioeliminarComponent;
  let fixture: ComponentFixture<FormularioeliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioeliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioeliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
