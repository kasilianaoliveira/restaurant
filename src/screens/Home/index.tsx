import { useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { Cart } from "../Cart";
import CartIcon from "../../assets/icons/cart.svg"

import { SideBar } from "../SideBar";
import "./style.scss";
import { Link } from "react-router-dom";

export const Home = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [windowWidth]);



  return (
    <div className="grid-container">
      {windowWidth <= 768 &&
        <Link to='/carrinho' className="cart-icon" >
          <img src={CartIcon} alt="Carrinho" />
        </Link>
      }
      <SideBar />
      <Card />
      {windowWidth > 768 && <Cart />}
    </div>
  );
};
