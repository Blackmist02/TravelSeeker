import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasaDeCambioPage } from './tasa-de-cambio.page';

describe('TasaDeCambioPage', () => {
  let component: TasaDeCambioPage;
  let fixture: ComponentFixture<TasaDeCambioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TasaDeCambioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
