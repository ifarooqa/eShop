import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-reviews',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './star-reviews.component.html',
  styleUrl: './star-reviews.component.scss',
})
export class StarReviewsComponent implements OnChanges {
  @Input() rating: number = 0;
  maxRating: number = 5;
  fullStars: number = Math.floor(this.rating);
  hasHalfStar: boolean = this.rating - this.fullStars >= 0.5;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rating']) {
      this.fullStars = Math.floor(this.rating);
      this.hasHalfStar = this.rating - this.fullStars >= 0.5;
    }
  }
}
