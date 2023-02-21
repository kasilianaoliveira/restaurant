import { useContext } from "react";
import { CategoriaContext } from "../../context/CategoriaContext";
import { CartItem } from "../components/CartItem";
import "./styles.scss";

export const Cart = () => {
  const { cartList } = useContext(CategoriaContext);


  return (
    <div className="cart">
      <h2 className="cart-title">Seu pedido</h2>
      {cartList.map((cart) => (
        cart.name !== '' && <CartItem
          key={Math.random()}
          id={cart.id}
          name={cart.name}
          description={cart.description}
          price={cart.price}
          offer={cart.offer}
          image={cart.image}
          quantity={cart.quantity}
        />

      ))}
    </div>
  )
}
