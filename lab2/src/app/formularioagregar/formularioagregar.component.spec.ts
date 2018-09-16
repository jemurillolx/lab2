import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioagregarComponent } from './formularioagregar.component';

describe('FormularioagregarComponent', () => {
  let component: FormularioagregarComponent;
  let fixture: ComponentFixture<FormularioagregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioagregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
