import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarReviewsComponent } from './star-reviews.component';

describe('StarReviewsComponent', () => {
  let component: StarReviewsComponent;
  let fixture: ComponentFixture<StarReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
