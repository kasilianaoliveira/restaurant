

import { ItemProps } from "../types/Item";

export interface CategoryContextData {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;

  cartList: ItemProps[];
  setCartList: React.Dispatch<React.SetStateAction<ItemProps[]>>;

  handleRemoveFromCart: (product: ItemProps) => void;
  handleAddToCart: (product: ItemProps) => void;
  handleClickButton: (id: string) => void;
  isActive: (id: string) => boolean;
}



