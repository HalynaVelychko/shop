export enum ProductCategory {
  Car = 'CAR',
  Motorbike = 'MOTORBIKE',
  Bicycle = 'BICYCLE',
}


export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  image: string;
}
