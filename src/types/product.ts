export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  weight?: string; // o number, según tu API
  dimensions?: Dimensions;
}

export interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
