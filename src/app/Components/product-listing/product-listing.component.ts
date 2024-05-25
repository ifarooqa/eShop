import { Component, OnInit, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { StarReviewsComponent } from '../star-reviews/star-reviews.component';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  providers: [ProductService],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.scss',
  imports: [ProductCardComponent, CommonModule, StarReviewsComponent],
})
export class ProductListingComponent implements OnInit {
  private productService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
    this.getAllProduct();
  }
  updateRating(product: any, step: number) {
    product.rating += step;
  }

  getAllProduct() {
    this.productService.getAll().subscribe((data: any) => {
      console.log(data);
    });
  }
}
