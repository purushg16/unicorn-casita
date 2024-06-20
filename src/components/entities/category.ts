export default interface Category {
  _id?: string;
  name: string;
  imageLink: string;
  pickup?: string;
}

export interface EditCategory {
  categoryId: string;
  name: string;
  imageLink: string;
}

export interface DeleteCategory {
  categoryId: string;
}
