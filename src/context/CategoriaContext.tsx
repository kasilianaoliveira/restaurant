import { createContext, FC, ReactNode, useState } from "react";
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

  return (
    <CategoriaContext.Provider
      value={{
        selectedItem,
        setSelectedItem,
        handleClickButton,
        isActive,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
