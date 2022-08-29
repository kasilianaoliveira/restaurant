import { CategoriaContextProvider } from "../../context/CategoriaContext";
import { Card } from "../Card";

import { SideBar } from "../SideBar";
import "./style.scss";

export const Home = () => {
  return (
    <div className="grid-container">
      <CategoriaContextProvider>
        <SideBar />
        <Card />
      </CategoriaContextProvider>
    </div>
  );
};
