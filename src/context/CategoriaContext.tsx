import { createContext, FC, ReactNode, useState } from 'react';
import { ItemProps } from '../types/Item';
import { CategoryContextData } from "./ContextTypes";

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoriaContext = createContext({} as CategoryContextData);

export const CategoriaContextProvider: FC<CategoryProviderProps> = ({
  children,
}: CategoryProviderProps) => {

  const [selectedItem, setSelectedItem] = useState("pizza");

  const handleClickButton = (id: string) => setSelectedItem(id);

  const isActive = (id: string) => selectedItem === id;


  const [cartList, setCartList] = useState<ItemProps[]>([]);


  const handleAddToCart = (product: ItemProps) => {
    const productAlreadyExist = cartList.some((cart) => cart.id === product.id);
    console.log(cartList)
    if (productAlreadyExist) {

      return setCartList((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )

    }
    setCartList((prevState) => [...prevState, { ...product, quantity: 1 }]);
  }

  const handleRemoveFromCart = (product: ItemProps) => {
    const productIndex = cartList.findIndex((cart) => cart.id === product.id);
    const updatedCartList = [...cartList];
    if (updatedCartList[productIndex].quantity === 1) {
      updatedCartList.splice(productIndex, 1);
    } else {
      updatedCartList[productIndex].quantity -= 1;
    }
    setCartList(updatedCartList);
  }

  return (
    <CategoriaContext.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        selectedItem,
        setSelectedItem,
        cartList,
        setCartList,
        handleClickButton,
        isActive,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
