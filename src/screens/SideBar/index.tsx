import Pizza from "../../assets/icons/pizza.svg";
import Combo from "../../assets/icons/french-fries.svg";
import Deserts from "../../assets/icons/ice-cream.svg";
import Drinks from "../../assets/icons/smothie.svg";
import Burguer from "../../assets/icons/food.svg";

import "./style.scss";
import { useContext } from "react";
import { List } from "../components/List/Index";
import { CategoriaContext } from "../../context/CategoriaContext";

let categoriesList = [
  {
    label: "Pizza",
    icon: Pizza,
    id: "pizza",
  },
  {
    label: "Bebidas",
    icon: Combo,
    id: "drinks",
  },
  {
    label: "Doces",
    icon: Deserts,
    id: "deserts",
  },
  {
    label: "Combos",
    icon: Drinks,
    id: "combo",
  },
  {
    label: "Burguers",
    icon: Burguer,
    id: "burguers",
  },
];

export const SideBar = () => {
  const { handleClickButton, isActive } = useContext(CategoriaContext);

  return (
    <div className="category-list">
      <ul>
        {categoriesList.map((category) => {
          return (
            <List
              id={category.id}
              key={category.id}
              isActive={isActive(category.id)}
              onClick={handleClickButton}
              icon={category.icon}
              label={category.label}
            />
          );
        })}
      </ul>
    </div>
  );
};
