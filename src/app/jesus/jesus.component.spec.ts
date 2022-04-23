import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesusComponent } from './jesus.component';

describe('JesusComponent', () => {
  let component: JesusComponent;
  let fixture: ComponentFixture<JesusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JesusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JesusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
