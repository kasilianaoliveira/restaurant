export interface ItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  offer: boolean;
  image: string;
  quantity: number;
}

export interface Product {
  product: ItemProps;
  quantity: number;
}