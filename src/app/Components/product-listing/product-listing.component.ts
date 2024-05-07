import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { StarReviewsComponent } from '../star-reviews/star-reviews.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss',
  imports: [ProductCardComponent, CommonModule, StarReviewsComponent],
})
export class ProductListingComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'first product description',
      price: 3.5,
    },
    { id: 2, title: 'Product 2', description: 'second product', price: 4 },
    { id: 3, title: 'Product 3', description: 'third product', price: 2.5 },
    { id: 4, title: 'Product 4', description: 'four product', price: 5.5 },
  ];

  updateRating(product: any, step: number) {
    product.rating += step;
  }
}
