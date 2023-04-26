import { useContext } from "react";
import { CategoriaContext } from "../../../context/CategoriaContext";
import { ItemProps } from "../../../types/Item";
import "./styles.scss";


export const CartItem = (item: ItemProps) => {
  const { handleAddToCart,handleRemoveFromCart } = useContext(CategoriaContext);

  const filterPrice = item.price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });


  return (
    <div className="cart-item">
      <div className="item-quantity">
        <button onClick={() => handleRemoveFromCart(item)}>-</button>
        <p>{item.quantity}</p>
        <button onClick={() => handleAddToCart(item)}>+</button>
      </div>
      <div className="img-container">
        <img src={item.image} alt="" className="item-img" />
      </div>
      <div className="content-cart">
        <h3 className="item-name">{item.name}</h3>
        <a href="http://" className="item-observation">Adicionar observação</a>
      </div>
      <p className="item-price">{filterPrice}</p>
    </div>
    
  )
}

