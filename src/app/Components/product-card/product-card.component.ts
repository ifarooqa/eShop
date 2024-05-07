import { Component, Input } from '@angular/core';
import { StarReviewsComponent } from '../star-reviews/star-reviews.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  imports: [StarReviewsComponent],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
