export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  launchPrice: number;
  currency: string;
  imageUrl?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  launchPrice: number;
  quantity: number;
  imageUrl?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'paid' | 'failed';
  createdAt: Date;
  paidAt?: Date;
  email?: string;
}
