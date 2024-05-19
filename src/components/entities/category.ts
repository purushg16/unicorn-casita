export default interface Category {
  _id?: string;
  name: string;
  imageLink: string;
}

export interface DeleteCategory {
  categoryId: string;
}
