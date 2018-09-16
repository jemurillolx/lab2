import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrocontenidoComponent } from './cuadrocontenido.component';

describe('CuadrocontenidoComponent', () => {
  let component: CuadrocontenidoComponent;
  let fixture: ComponentFixture<CuadrocontenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadrocontenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrocontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
