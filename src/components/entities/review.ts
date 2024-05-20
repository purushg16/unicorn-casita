export interface Review {
  _id?: string;
  name: string;
  company?: string;
  rating: number;
  shortReview: string;
}

export interface DelReview {
  reviewId: string;
}
