import { CategoriaContextProvider } from "../../context/CategoriaContext";
import { Card } from "../Card";
import { Cart } from "../Cart";

import { SideBar } from "../SideBar";
import "./style.scss";

export const Home = () => {
  return (
    <div className="grid-container">
      <CategoriaContextProvider>
        <SideBar />
        <Card />
        <Cart />
      </CategoriaContextProvider>
    </div>
  );
};
