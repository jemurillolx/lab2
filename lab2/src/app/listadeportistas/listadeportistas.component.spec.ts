import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeportistasComponent } from './listadeportistas.component';

describe('ListadeportistasComponent', () => {
  let component: ListadeportistasComponent;
  let fixture: ComponentFixture<ListadeportistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadeportistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeportistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
