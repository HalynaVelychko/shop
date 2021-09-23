import { ProductCategory, ProductModel } from './../products/model/product.model';

export const productsData: ProductModel[] = [
  {
    id: 1,
    name: 'Mazda CX3',
    description: 'some description',
    price: 30000,
    category: ProductCategory.Car,
    isAvailable: true,
    image: '../../assets/images/mazdaCX3.jpg',
    totalInTheCart: 0,
  },
  {
    id: 2,
    name: 'Mazda CX9',
    description: 'some description',
    price: 30000,
    category: ProductCategory.Car,
    isAvailable: false,
    image: '../../assets/images/mazdaCX3.jpg',
    totalInTheCart: 0,
  },
  {
    id: 3,
    name: 'Cradiac Mountin',
    description: 'some description',
    price: 1500,
    category: ProductCategory.Bicycle,
    isAvailable: true,
    image: '../../assets/images/cradiacMountin.jpg',
    totalInTheCart: 0,
  },
  {
    id: 4,
    name: 'Cradiac Shimano',
    description: 'some description',
    price: 1500,
    category: ProductCategory.Bicycle,
    isAvailable: false,
    image: '../../assets/images/cradiacShimanojpg.jpg',
    totalInTheCart: 0,
  },
];
