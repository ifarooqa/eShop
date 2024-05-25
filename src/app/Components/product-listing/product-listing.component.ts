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

  products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'first product description',
      price: 2200,
      imageUrl: 'assets/images/product1.png',
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'second product',
      price: 1800,
      imageUrl: 'assets/images/product2.png',
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'third product',
      price: 2500,
      imageUrl: 'assets/images/product3.png',
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'four product',
      price: 600,
      imageUrl: 'assets/images/product4.png',
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'fifth product',
      price: 1500,
      imageUrl: 'assets/images/product4.png',
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'sixth product',
      price: 2000,
      imageUrl: 'assets/images/product4.png',
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'seventh product',
      price: 1100,
      imageUrl: 'assets/images/product4.png',
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'eight product',
      price: 1200,
      imageUrl: 'assets/images/product4.png',
    },
  ];

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
