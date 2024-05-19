export interface Review {
  name: string;
  company?: string;
  rating: number;
  shortReview: string;
}

export interface DelReview {
  reviewId: string;
}
