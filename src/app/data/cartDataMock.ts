import { ProductCategory, ProductModel } from "../products/model/product.model";

export const cartDataMock: ProductModel[] = [
  {
    id: 1,
    name: 'Mazda CX3',
    description: 'some description',
    price: 30000,
    category: ProductCategory.Car,
    isAvailable: true,
    image: '../../assets/images/mazdaCX3.jpg'
  },
  {
    id: 2,
    name: 'Mazda CX5',
    description: 'some description',
    price: 30000,
    category: ProductCategory.Car,
    isAvailable: true,
    image: '../../assets/images/mazdaCX3.jpg'
  },
  {
    id: 3,
    name: 'Mazda CX9',
    description: 'some description',
    price: 30000,
    category: ProductCategory.Car,
    isAvailable: true,
    image: '../../assets/images/mazdaCX3.jpg'
  },
];
