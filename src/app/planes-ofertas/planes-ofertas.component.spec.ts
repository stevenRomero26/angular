import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesOfertasComponent } from './planes-ofertas.component';

describe('PlanesOfertasComponent', () => {
  let component: PlanesOfertasComponent;
  let fixture: ComponentFixture<PlanesOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
