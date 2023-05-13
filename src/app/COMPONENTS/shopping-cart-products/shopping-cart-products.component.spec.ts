import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartProductsComponent } from './shopping-cart-products.component';

describe('ShoppingCartProductsComponent', () => {
  let component: ShoppingCartProductsComponent;
  let fixture: ComponentFixture<ShoppingCartProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
